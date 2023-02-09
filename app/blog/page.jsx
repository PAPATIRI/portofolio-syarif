"use client";
import ArticleList from "@/components/ArticleList";
import { useEffect, useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    await fetch("https://blog.zanccode.site/api/articles?populate=*")
      .then((res) => res.json())
      .then((data) => setArticles(data.data));
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="w-full ">
      <h1 className="text-4xl text-milk-cyan font-medium mt-10">blog.</h1>
      <p className="text-lg text-milk-coffe dark:text-milk-white mt-5 w-[80%]">
        saya juga aktif menulis artikle di blog pribadi saya. saya menulis
        mengenai pengalaman selama perjalanan saya menyelami lautan software
        engineering. mulai dari frontend development, backend development, dan
        tools-tools yang saya gunakan.
      </p>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Blog;
