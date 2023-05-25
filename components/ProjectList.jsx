import Image from "next/image";
import Link from "next/link";

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((item) => (
        <Link
          key={item.attributes.slug}
          href={`/projects/${item.attributes.slug}`}
          className="p-4 hover:shadow-lg rounded-lg cursor-pointer"
        >
          <div className="rounded h-[200px] overflow-hidden w-[300px] object-cover mb-4">
            <Image
              src={`https://blog.zanccode.site${item.attributes.image.data.attributes.url}`}
              alt="project image"
              className="object-cover"
              width={300}
              height={200}
            />
          </div>
          <p className="text-lg text-milk-coffe dark:text-milk-white font-medium text-center">
            {item.attributes.name}
          </p>
        </Link>
      ))}
    </>
  );
};

export default ProjectList;
