"use client";
import Button from "@/components/Button";
import TechBubble from "@/components/TechBubble";
import Image from "next/image";
import { useEffect, useState } from "react";

const Project = (item) => {
  const slug = item.params.slug;
  const [dataProject, setDataProject] = useState([]);

  const getPojectBySlug = async () => {
    await fetch(
      `https://blog.zanccode.site/api/projects?populate=*&filters[slug]=${slug}`
    )
      .then((res) => res.json())
      .then((data) => setDataProject(data.data));
  };

  useEffect(() => {
    getPojectBySlug();
  }, []);

  console.log("data: ", dataProject);

  return (
    <div className="mt-12">
      {dataProject.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-milk-coffe dark:text-milk-white">
            {item?.attributes?.name}
          </h1>
          <div className="flex items-start mt-4 gap-6 max-w[600px]">
            <div className="rounded-lg overflow-hidden w-[400px] h-[250px] object-cover shadow">
              <Image
                src={`https://blog.zanccode.site${item?.attributes?.image?.data?.attributes?.url}`}
                alt="gambar project"
                width={500}
                height={350}
              />
            </div>
            <div>
              <p className="text-lg font-md text-milk-cyan mb-2">Stack</p>
              {dataProject.map((stack) =>
                stack?.attributes?.skills?.data.map((item) => (
                  <div key={item.id} className="mb-2">
                    <TechBubble data={item?.attributes?.name} />
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex items-center self-start gap-4 mt-4">
            <Button href={item?.attributes?.urlProject} text="live demo" />
          </div>
          <div className="max-w-[600px] mt-12">
            <div
              className="text-lg text-milk-coffe dark:text-milk-white"
              dangerouslySetInnerHTML={{
                __html: item?.attributes?.description,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
