"use client";
import ProjectCard from "@/components/ProjectCard";
import TechBubble from "@/components/TechBubble";
import { useEffect, useState } from "react";
import { skills } from "../../constants";

const Skill = () => {
  const [projectData, setProjectData] = useState([]);

  async function getData() {
    await fetch("https://blog.zanccode.site/api/projects?populate=*")
      .then((res) => res.json())
      .then((data) => setProjectData(data.data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-5xl text-milk-cyan font-medium mt-10">skill.</h1>
      <div className="flex flex-wrap gap-5 mt-10">
        {skills?.map((item) => (
          <TechBubble key={item.id} data={item.name} />
        ))}
      </div>
      <h1 className="text-5xl text-milk-cyan font-medium mt-14">projects.</h1>
      <div className="flex flex-wrap gap-2 mt-5">
        {projectData.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
