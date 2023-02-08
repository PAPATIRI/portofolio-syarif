import FormEmail from "@/components/FormEmail";
import Image from "next/image";
import { socialMedia } from "../../constants";

const Contact = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-milk-cyan font-medium mt-10">contact.</h1>
      <div className="flex items-end justify-between gap-4 mt-10">
        <div className="flex-1 pr-5">
          <p className="text-milk-coffe dark:text-milk-white text-lg">
            ada ide dan ingin berkolaborasi, lets get in touch and make the
            ideas come true
          </p>
          <FormEmail />
        </div>
        <div className="flex-1 pl-5">
          <h2 className="text-2xl text-milk-coffe dark:text-milk-white font-medium mb-5">
            sosial media.
          </h2>
          <p className="text-lg text-milk-coffe dark:text-milk-white">
            saya aktif di beberapa sosial media, jangan sungkan berbagi
            pengalaman dengan saya.
          </p>
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
    </div>
  );
};

export default Contact;
