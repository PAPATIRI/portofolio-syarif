import Image from "next/image";
import Link from "next/link";
import LoadingSkeleton from "./LoadingSkeleton";

const ArticleList = ({ loading, articles }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-wrap gap-4 mt-10">
      {loading ? (
        <LoadingSkeleton type="post" />
      ) : (
        articles.map((article) => (
          <Link
            href={`/blog/${article.attributes.slug}`}
            key={article.attributes.slug}
            className="w-fit p-4 hover:shadow-md cursor-pointer rounded-lg"
          >
            <div className="object-fit h-[120px] w-fit overflow-hidden">
              <Image
                src={`https://blog.zanccode.site${article.attributes.image.data.attributes.url}`}
                alt="post image"
                width={350}
                height={100}
                className="rounded mb-4"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-milk-coffe dark:text-milk-white font-medium">
                {article.attributes.title}
              </p>
              <p className="text-sm text-milk-coffe dark:text-milk-white">
                {new Date(article.attributes.createdAt).toLocaleDateString(
                  "id-ID",
                  options
                )}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default ArticleList;
