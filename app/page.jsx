import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative w-full">
      <div className="absolute w-full h-[650px]">
        <h2 className="absolute text-9xl text-transparent font-bold -left-20 top-80 stroke-text dark:opacity-40">
          FRONTEND
        </h2>
        <h2 className="absolute text-9xl text-transparent font-bold right-24 bottom-14 text-transparent stroke-text dark:opacity-40">
          DEVELOPER
        </h2>
      </div>
      <h1 className="text-5xl capitalize mt-[200px] text-milk-coffe dark:text-milk-white">
        hai, saya <span className="font-bold">syarif</span>
      </h1>
      <div className="absolute mt-[64px] flex flex-col items-center w-full h-[650px]">
        <h2 className="absolute text-9xl font-bold left-0 top-48 text-milk-coffe dark:text-milk-white">
          FRONTEND
        </h2>
        <div className="absolute self-end object-cover mr-24 bg-transparent w-[405px] h-[621px]">
          <Image
            src="/syarif.png"
            alt="foto syarif"
            priority
            width={405}
            height={621}
          />
        </div>
        <h2 className="absolute text-9xl font-bold right-0 bottom-44 text-milk-cyan dark:text-milk-cyan">
          DEVELOPER
        </h2>
      </div>
    </main>
  );
}
