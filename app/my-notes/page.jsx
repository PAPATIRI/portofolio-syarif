import ArticleList from "@/components/ArticleList";
import Button from "@/components/Button";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

async function getArticles() {
  const res = await fetch(
    "https://blog.zanccode.site/api/articles?populate=*&sort=createdAt:desc&pagination[pageSize]=3"
  );
  return res.json();
}

export default async function Blog() {
  const articles = await getArticles();

  return (
    <>
      <TopBar />
      <main className="h-full">
        <h1 className="text-2xl lg:text-4xl text-milk-coffe dark:text-white font-medium lg:mt-10">
          my <span className="text-milk-cyan">blog.</span>
        </h1>
        <p className="text-base lg:text-lg leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white mt-5 lg:w-[80%]">
          saya juga aktif menulis artikle di blog pribadi saya. saya menulis
          mengenai pengalaman selama perjalanan saya menyelami lautan software
          engineering. mulai dari frontend development, backend development, dan
          tools-tools yang saya gunakan.
        </p>
        <ArticleList articles={articles.data} />
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
}
