import "./globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col items-center bg-white dark:bg-milk-coffe">
        <div className="w-full flex flex-col items-center h-screen w-[1072px] max-w-[1072px] pt-[118px]">
          {children}
        </div>
      </body>
    </html>
  );
}
