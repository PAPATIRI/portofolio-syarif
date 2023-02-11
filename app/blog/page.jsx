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
      <main className="h-full">
        <h1 className="text-2xl lg:text-4xl text-milk-cyan font-medium lg:mt-10">
          blog.
        </h1>
        <p className="text-base lg:text-lg leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white mt-5 lg:w-[80%]">
          saya juga aktif menulis artikle di blog pribadi saya. saya menulis
          mengenai pengalaman selama perjalanan saya menyelami lautan software
          engineering. mulai dari frontend development, backend development, dan
          tools-tools yang saya gunakan.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 lg:mb-24 lg:mt-5">
          <ArticleList loading={loading} articles={articles} />
        </div>
        <div className="flex justify-center lg:justify-start">
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
