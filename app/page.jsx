"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import SyarifPicture from "../public/syarif.png";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex flex-col md:flex-row relative w-full h-full pb-20">
        <div className="mb-5 md:mb-0 md:flex-1 self-center">
          <div className="mb-10 lg:mb-8">
            {/* <h1 className="text-2xl text-center md:text-left lg:text-3xl font-medium text-milk-coffe dark:text-milk-white">
              Hai, I&apos;m Syarif.
            </h1> */}
            <h1 className="text-2xl text-center md:text-left lg:text-3xl font-medium text-milk-coffe dark:text-milk-white">
              Halo, my name is syarif
            </h1>
          </div>
          <div className="lg:-rotate-[20deg] -ml-0 mb-2 lg:-ml-8 lg:-mb-14 bg-milk-coffe/80 dark:bg-milk-choco/80 shadow-md w-full md:w-fit px-4 py-1">
            <p className="text-lg lg:text-xl text-center lg:text-left text-milk-cyan italic font-medium">
              An Ordinary
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-transparent text-center md:text-left text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-400% animate-left-to-right bg-clip-text ">
              Frontend
            </h1>
            <h1 className="ml-0 md:ml-20 text-transparent text-center md:text-left text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-400% animate-left-to-right bg-clip-text ">
              Developer.
            </h1>
          </div>
          <p className="text-base lg:text-lg text-center md:text-left leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white">
            I&apos;m a developer that turning your idea and design into real
            life products. my favorite saying is{" "}
            <span className="font-bold text-milk-coffe dark:text-milk-white">
              &quot;man jadda wa jada&quot;{" "}
            </span>
            just FYI.
          </p>
        </div>
        <div className="rounded-lg self-center h-[350px] w-[300px] md:h-[600px] md:w-[400px] object-cover overflow-hidden">
          <Image
            src={SyarifPicture}
            alt="profile"
            width={400}
            height={600}
            placeholder="blur"
          />
        </div>
      </main>
    </>
  );
}
