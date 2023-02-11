import Image from "next/image";
import Link from "next/link";
import LoadingSkeleton from "./LoadingSkeleton";

const ProjectList = ({ loading, projects }) => {
  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        projects.map((item) => (
          <Link
            key={item.attributes.slug}
            href={`/project/${item.attributes.slug}`}
            className="p-4 hover:shadow-lg rounded-lg cursor-pointer"
          >
            <div className="rounded shadow h-[200px] overflow-hidden w-full object-cover mb-4">
              <Image
                src={`https://blog.zanccode.site${item.attributes.image.data.attributes.url}`}
                alt="project image"
                height={200}
                width={350}
              />
            </div>
            <p className="text-lg text-milk-coffe dark:text-milk-white font-medium text-center">
              {item.attributes.name}
            </p>
          </Link>
        ))
      )}
    </>
  );
};

export default ProjectList;
