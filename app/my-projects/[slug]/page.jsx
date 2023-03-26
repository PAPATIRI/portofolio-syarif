import Button from "@/components/Button";
import TechBubble from "@/components/TechBubble";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

async function getDetailProject(item) {
  const slug = item.params.slug;
  const res = await fetch(
    `https://blog.zanccode.site/api/projects?populate=*&filters[slug]=${slug}`
  );
  return res.json();
}

export default async function ProjectDetail(item) {
  const detailProject = await getDetailProject(item);

  return (
    <>
      <TopBar type="detailpage" />
      <div className="w-full md:w-fit">
        <Link
          href="/my-projects"
          className="flex self-start items-center gap-2 text-base lg:text-lg font-normal text-milk-choco dark:text-milk-white mb-8 hover:text-milk-choco hover:font-medium transition-all duration-400"
        >
          <AiOutlineArrowLeft size={16} />
          kembali
        </Link>
        {detailProject.data.map((item) => (
          <div key={item.id}>
            <h1 className="text-xl lg:text-3xl text-center lg:text-left font-bold text-milk-coffe dark:text-milk-white">
              {item?.attributes?.name}
            </h1>
            <div className="flex flex-col lg:flex-row items-start mt-4 gap-6 max-w[600px]">
              <div className="overflow-hidden w-full lg:w-[400px] h-full lg:h-[250px] shadow">
                <Image
                  src={`https://blog.zanccode.site${item?.attributes?.image?.data?.attributes?.url}`}
                  alt="gambar project"
                  width={500}
                  height={350}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-md text-milk-cyan mb-2">Stack</p>
                <div className="flex flex-wrap lg:flex-col gap-2 mb-5 lg:mb-0">
                  {item?.attributes.skills.data.map((skill) => (
                    <div key={skill.id} className="mb-0 lg:mb-2">
                      <TechBubble data={skill?.attributes?.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center self-start gap-4 mt-4">
              <Button href={item?.attributes?.urlProject} text="live demo" />
              <Button
                href={item?.attributes?.urlGithub}
                text="source code"
                secondary
              />
            </div>
            <div className="max-w-[600px] mt-12">
              <div
                className="text-base lg:text-lg leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white"
                dangerouslySetInnerHTML={{
                  __html: item?.attributes?.description,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
