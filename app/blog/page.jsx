import Image from "next/image";

const Blog = () => {
  return (
    <div className="w-full ">
      <h1 className="text-5xl text-milk-cyan font-medium mt-10">blog.</h1>
      <p className="text-lg text-milk-coffe dark:text-milk-white mt-10 w-[80%]">
        saya juga aktif menulis artikle di blog pribadi saya. saya menulis
        mengenai pengalaman selama perjalanan saya menyelami lautan software
        engineering. mulai dari frontend development, backend development, dan
        tools-tools yang saya gunakan.
      </p>
      <div className="flex flex-wrap gap-4 mt-10">
        <div className="w-fit p-4 hover:shadow-md cursor-pointer">
          <div className="object-fit h-[120px] w-fit overflow-hidden">
            <Image
              src="/defaultimg.png"
              alt="post image"
              width={300}
              height={100}
              className="rounded mb-4"
            />
          </div>
          <div className="mt-4">
            <p className="text-lg text-milk-coffe dark:text-milk-white font-medium">
              ini adalah judul dari post pertama
            </p>
            <p className="text-sm text-milk-coffe dark:text-milk-white">
              20 september 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
