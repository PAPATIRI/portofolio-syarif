"use client";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";

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
      <h1 className="text-4xl text-milk-cyan font-medium mt-10">projects.</h1>
      <div className="flex flex-wrap gap-2 mt-5">
        {projectData.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
