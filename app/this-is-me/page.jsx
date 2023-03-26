import Image from "next/image";
import dynamic from "next/dynamic";
import SyarifPantai from "../../public/blob-profile.png";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

const About = () => {
  return (
    <>
      <TopBar />
      <main className="flex flex-col lg:flex-row gap-2 w-full h-full self-start">
        <div className="lg:flex-1">
          <h1 className="text-2xl lg:text-4xl font-medium text-milk-choco dark:text-white lg:mt-10">
            this is <span className="text-milk-cyan">me.</span>
          </h1>
          <p className="text-milk-coffe dark:text-milk-white text-base lg:text-lg mt-5 leading-7 lg:leading-8">
            halo 👋,
            <br />
            Saya syarif taufik hidayat, Fresh graduate dari{" "}
            <b>Universitas Ahmad Dahlan</b> (UAD) Yogyakarta. berfokus pada web
            development khususnya frontend development.
            <br /> senang belajar hal baru, practice makes perfect believer,
            introvert, fans Detective Conan, pecinta semua sambal (yang penting
            pedes).
            <br />
            memfokuskan diri di web development khususnya{" "}
            <b>frontend developer</b> dan tahun ini bertujuan untuk menjadi{" "}
            <b>fullstack developer</b>.
          </p>
        </div>
        <div className="object-cover self-center lg:flex-2">
          <Image
            src={SyarifPantai}
            alt="blob profile"
            width={500}
            height={452}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </main>
    </>
  );
};

export default About;
