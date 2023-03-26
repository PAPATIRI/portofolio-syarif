import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import dynamic from "next/dynamic";
import splitImgUrl from "@/utils/splitImgUrl";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

async function getArticleByslug(article) {
  const slug = article.params.slug;
  const res = await fetch(
    `https://blog.zanccode.site/api/articles?populate=*&filters[slug]=${slug}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function DetailArticle(article) {
  const detailArticle = await getArticleByslug(article);

  return (
    <>
      <TopBar type="detailpage" />
      <div className="w-full md:w-[600px] pb-16">
        <Link
          href="/my-notes"
          className="flex items-center font-normal gap-2 text-base lg:text-lg text-milk-choco dark:text-milk-white mb-8 hover:text-milk-choco hover:font-medium transition-all duration-400"
        >
          <AiOutlineArrowLeft size={14} />
          kembali
        </Link>
        {detailArticle.data.map((data) => (
          <div key={data.attributes.slug}>
            <h1 className="text-xl lg:text-2xl text-center lg:text-left font-medium text-milk-cyan mb-2">
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
              className="text-base lg:text-lg leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white"
              dangerouslySetInnerHTML={{
                __html: splitImgUrl(data.attributes.content),
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}
