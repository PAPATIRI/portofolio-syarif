"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menus } from "../constants";
import SwitcherDarkMode from "./SwitcherDarkMode";
import { HiBars3BottomRight } from "react-icons/hi2";

const TopBar = ({ type }) => {
  const router = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  const onclickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 w-full max-w-[1072px] px-5 lg:px-0 flex items-center justify-between pt-[50px] pb-4 bg-white dark:bg-milk-coffe z-50">
      <Link href="/">
        <h1 className="text-xl font-bold text-milk-choco dark:text-milk-white cursor-pointer">
          Syarif<span className="text-milk-cyan">.</span>
        </h1>
      </Link>
      <div
        className={`${
          type === "detailpage" ? "hidden" : "hidden md:flex"
        }  items-center gap-6 md:gap-10`}
      >
        {menus?.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`text-base lg:text-lg font-medium text-milk-coffe dark:text-milk-white ${
              router === item.path && "text-milk-cyan dark:text-milk-cyan"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className={`mr-12 md:mr-0 ${type === "detailpage" && "mr-0"}`}>
        <SwitcherDarkMode />
      </div>

      {/* topbar mobile */}
      <div className="fixed md:hidden top-24 right-4 w-fit px-5 lg:px-0 z-50">
        <div
          onClick={onclickMenu}
          className={`inset-0 bg-milk-coffe/40 z-40 w-full h-full ${
            showMenu ? "fixed" : "hidden"
          }`}
        >
          <div
            className={`absolute top-24 right-4 px-4 py-2 rounded bg-white shadow-lg dark:bg-milk-choco z-50 transition-transform duration-400 ${
              type === "detailpage" && "hidden"
            }`}
          >
            {menus?.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className={`block text-center py-2 px-4 text-base lg:text-lg font-medium text-milk-coffe dark:text-milk-white ${
                  router === item.path &&
                  "text-milk-cyan dark:text-milk-cyan font-bold"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <HiBars3BottomRight
          className={`fixed z-50 top-[50px] font-bold text-milk-choco dark:text-milk-white right-5 block lg:hidden text-3xl cursor-pointer ${
            type === "detailpage" && "hidden"
          }`}
          size={24}
          onClick={onclickMenu}
        />
      </div>
    </div>
  );
};

export default TopBar;
