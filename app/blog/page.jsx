"use client";
import ArticleList from "@/components/ArticleList";
import Button from "@/components/Button";
import TopBar from "@/components/TopBar";
import { useEffect, useState } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    await fetch("https://blog.zanccode.site/api/articles?populate=*")
      .then((res) => res.json())
      .then((data) => setArticles(data.data));
    setLoading(false);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <TopBar />
      <main className="w-full relative h-full">
        <h1 className="text-4xl text-milk-cyan font-medium mt-10">blog.</h1>
        <p className="text-lg text-milk-coffe dark:text-milk-white mt-5 w-[80%]">
          saya juga aktif menulis artikle di blog pribadi saya. saya menulis
          mengenai pengalaman selama perjalanan saya menyelami lautan software
          engineering. mulai dari frontend development, backend development, dan
          tools-tools yang saya gunakan.
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          <ArticleList loading={loading} articles={articles} />
        </div>
        <div className="absolute bottom-40">
          <Button
            href="https://zanccode.vercel.app"
            type="full"
            text="artikel lainnya"
          />
        </div>
      </main>
    </>
  );
};

export default Blog;
