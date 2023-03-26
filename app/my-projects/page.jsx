import ProjectList from "@/components/ProjectList";
import { skills } from "@/constants";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

async function getProjects() {
  const res = await fetch("https://blog.zanccode.site/api/projects?populate=*");
  return res.json();
}
const Project = async () => {
  const projects = await getProjects();

  return (
    <>
      <TopBar />
      <main className="w-full">
        <h1 className="text-2xl lg:text-4xl text-milk-coffe dark:text-white font-medium lg:mt-10">
          my <span className="text-milk-cyan">projects.</span>
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
          dan <b className="dark:text-white">Vim/Neovim dan Vs Code</b> sebagai
          code editor saya.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5 mb-10 lg:mb-0">
          <ProjectList projects={projects.data} />
        </div>
      </main>
    </>
  );
};

export default Project;
