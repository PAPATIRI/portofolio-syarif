"use client";
import LoadingSkeletonDetailPage from "@/components/LoadingSkeletonDetailPage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

const DetailArticle = (article) => {
  const [dataArticle, setDataArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const slug = article.params.slug;

  const getArticleBySlug = async () => {
    await fetch(
      `https://blog.zanccode.site/api/articles?populate=*&filters[slug]=${slug}`
    )
      .then((res) => res.json())
      .then((data) => setDataArticle(data.data));
    setLoading(false);
  };

  useEffect(() => {
    getArticleBySlug();
  }, []);

  return (
    <>
      <TopBar type="detailpage" />
      <div className="w-full md:w-[600px]">
        <Link
          href="/blog"
          className="flex items-center font-normal gap-2 text-base lg:text-lg text-milk-choco dark:text-milk-white mb-8 hover:text-milk-choco hover:font-medium transition-all duration-400"
        >
          <AiOutlineArrowLeft size={14} />
          kembali
        </Link>
        {loading ? (
          <LoadingSkeletonDetailPage />
        ) : (
          dataArticle.map((data) => (
            <div key={data.attributes.slug}>
              <h1 className="text-xl lg:text-3xl text-center lg:text-left font-medium text-milk-cyan mb-2">
                {data.attributes.title}
              </h1>
              <div className="h-full md:h-[180px] w-full object-cover rounded-lg overflow-hidden mb-10">
                <Image
                  src={`https://blog.zanccode.site${data.attributes.image.data.attributes.url}`}
                  alt="image article"
                  width={700}
                  height={300}
                />
              </div>
              <div
                className="text-base lg:text-lg leading-7 lg:leading-8 leading-8 text-milk-coffe dark:text-milk-white"
                dangerouslySetInnerHTML={{ __html: data.attributes.content }}
              ></div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DetailArticle;
