import FormEmail from "@/components/FormEmail";
import Image from "next/image";
import { socialMedia, currentlyLearning } from "../../constants";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar"), { ssr: false });

const Contact = () => {
  return (
    <>
      <TopBar />
      <main className="w-full">
        <h1 className="text-2xl text-milk-coffe dark:text-white lg:text-4xl font-medium lg:mt-10">
          my <span className="text-milk-cyan">etc.</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-10">
          <div className="flex-1 mb-10 md:mb-0 lg:pr-5">
            <h2 className="text-2xl capitalize text-milk-coffe dark:text-milk-white font-medium mb-2">
              Tech Stack i wanna learn in 2023
            </h2>
            <p className="text-milk-coffe dark:text-milk-white text-base lg:text-lg leading-7 lg:leading-8">
              di tahun 2023 ini saya ingin menjadikan diri saya mas mas
              fullstack biasa, dengan beberapa teknologi yang ingin saya
              pelajari di antaranya:
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-5 md:mt-10">
              {currentlyLearning.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col-reverse items-center border-2 rounded-lg p-4 border-milk-coffe/40 dark:border-milk-white/40 bg-transparent dark:bg-milk-white/20"
                >
                  <p className="text-base lg:text-lg leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white">
                    {item.subject}
                  </p>
                  <div className="h-[100px] w-[100px] overflow-hidden">
                    <Image
                      src={item.img}
                      alt="subject logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 lg:pl-5">
            <div className="mb-10 flex flex-col">
              <h2 className="text-2xl text-milk-coffe dark:text-milk-white font-medium mb-2">
                currently reading
              </h2>
              <div className="h-[250px] w-[250px] self-center md:self-start rounded-lg overflow-hidden mt-3">
                <Image
                  src="/my-busy-img/reading-book.jpg"
                  alt="subject logo"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <h2 className="text-2xl text-milk-coffe dark:text-milk-white font-medium mb-2 mt-10 md:mt-0">
              sosial media.
            </h2>
            {/* <p className="text-base lg:text-lg leading-7 lg:leading-8 text-milk-coffe dark:text-milk-white">
              saya aktif di beberapa sosial media, jangan sungkan berbagi
              pengalaman dengan saya.
            </p> */}
            <div className="flex flex-wrap gap-4 mt-5">
              {socialMedia?.map((item) => (
                <div key={item.id}>
                  <div className="bg-milk-coffe dark:bg-milk-choco rounded-xl w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-400">
                    <a target="_blank" rel="noreferrer" href={item.url}>
                      <Image
                        src={item.icon}
                        alt="icon sosial"
                        width={48}
                        height={48}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
