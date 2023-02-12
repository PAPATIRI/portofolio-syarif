"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex flex-col md:flex-row relative w-full h-full pb-20">
        <div className="mb-5 md:mb-0 md:flex-1 self-center">
          <div className="mb-10 lg:mb-8">
            <h1 className="text-2xl text-center md:text-left lg:text-3xl font-bold text-milk-coffe dark:text-milk-white">
              Hai, I&apos;m Syarif.
            </h1>
          </div>
          <div className="lg:-rotate-[20deg] -ml-0 mb-2 lg:-ml-8 lg:-mb-14 bg-milk-white/80 dark:bg-milk-choco/80 shadow-md w-full md:w-fit px-4 py-1">
            <p className="text-lg lg:text-xl text-center lg:text-left text-milk-cyan italic font-medium">
              An Ordinary
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-transparent text-center md:text-left text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-400% animate-left-to-right bg-clip-text ">
              Frontend
            </h1>
            <h1 className="ml-0 md:ml-20 text-transparent text-center md:text-left text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-400% animate-left-to-right bg-clip-text ">
              Developer
            </h1>
          </div>
          <p className="text-base lg:text-lg text-center md:text-left leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white">
            Aiming to become a{" "}
            <span className="font-bold text-choco dark:text-white">
              Frontend Developer Specialist.
            </span>{" "}
            maybe not yet but definitely will be. as the saying goes{" "}
            <span className="font-bold text-choco dark:text-white underline underline-offset-8">
              &quot;man jadda wa jada&quot;
            </span>
          </p>
        </div>
        <div className="self-center h-[350px] w-[300px] md:h-[600px] md:w-[400px] overflow-hidden">
          <Image src="/syarif.png" alt="profile" width={400} height={600} />
        </div>
      </main>
    </>
  );
}
