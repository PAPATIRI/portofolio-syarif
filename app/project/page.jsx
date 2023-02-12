"use client";
import ProjectList from "@/components/ProjectList";
import { skills } from "@/constants";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    await fetch("https://blog.zanccode.site/api/projects?populate=*")
      .then((res) => res.json())
      .then((data) => setProjectData(data.data));

    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TopBar />
      <main className="w-full">
        <h1 className="text-2xl lg:text-4xl text-milk-cyan font-medium lg:mt-10">
          projects.
        </h1>
        <p className="text-base lg:text-lg text-milk-coffe dark:text-milk-white leading-7 lg:leading-8 mt-5 w-full lg:w-[80%]">
          saya telah membangun beberapa project pribadi untuk mengasah skill
          yang telah saya pelajari. stack dan tools yang saya gunakan untuk
          membangun project-project ini menggunakan
          {skills.map((item) => (
            <span key={item.id} className="font-bold dark:text-white">
              {" "}
              {item.name},{" "}
            </span>
          ))}
          dan <b className="dark:text-white">Neovim</b> sebagai code editor
          saya.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5 mb-10 lg:mb-0">
          <ProjectList loading={loading} projects={projectData} />
        </div>
      </main>
    </>
  );
};

export default Project;
