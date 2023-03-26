import Image from "next/image";
import Link from "next/link";
import LoadingSkeleton from "./LoadingSkeleton";

const ArticleList = ({ articles }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 mt-4 lg:mb-24 lg:mt-5">
      {articles.map((article) => (
        <Link
          href={`/my-notes/${article.attributes.slug}`}
          key={article.attributes.slug}
          className="w-[284px] p-4 hover:shadow-md cursor-pointer rounded-lg"
        >
          <div className="h-[124px] rounded mb-4 overflow-hidden">
            <Image
              src={`https://blog.zanccode.site${article.attributes.image.data.attributes.url}`}
              alt="post image"
              className="object-cover h-[124px]"
              width={300}
              height={200}
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-milk-coffe/70 dark:text-milk-white/70 mb-4">
              {new Date(article.attributes.createdAt).toLocaleDateString(
                "id-ID",
                options
              )}
            </p>
            <p className="text-lg text-milk-coffe dark:text-milk-white font-medium">
              {article.attributes.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
