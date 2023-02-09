import Image from "next/image";

const About = () => {
  return (
    <div className="flex gap-2 w-full h-full self-start">
      <div className="flex-1">
        <h1 className="text-4xl font-medium text-milk-choco dark:text-white mt-10">
          tentang <span className="text-milk-cyan">Saya.</span>
        </h1>
        <p className="text-milk-coffe dark:text-milk-white text-lg mt-5 leading-8">
          Fresh graduate dari <b>Universitas Ahmad Dahlan</b> (UAD) Yogyakarta.
          berfokus pada web development khususnya frontend development.
          <br /> senang belajar hal baru, practice makes perfect believer,
          introvert, fans Detective Conan, dan pembaca manga manhua & manhwa.
          sedang mencari pekerjaan pertama saya sebagai{" "}
          <b>frontend developer</b>. butuh pengalaman lebih agar menjadi
          “programmer tampan & intelek”.
        </p>
      </div>
      <div className="object-cover self-center flex-2">
        <Image
          src="/blob-profile.png"
          alt="blob profile"
          width={500}
          height={452}
        />
      </div>
    </div>
  );
};

export default About;
