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
    <>
      {loading ? (
        <LoadingSkeleton type="post" />
      ) : (
        articles.map((article) => (
          <Link
            href={`/blog/${article.attributes.slug}`}
            key={article.attributes.slug}
            className="w-fit p-4 hover:shadow-md cursor-pointer rounded-lg"
          >
            <div className="object-fit h-[120px] w-full rounded mb-4 shadow overflow-hidden">
              <Image
                src={`https://blog.zanccode.site${article.attributes.image.data.attributes.url}`}
                alt="post image"
                width={350}
                height={100}
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
    </>
  );
};

export default ArticleList;
