"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight } from "react-icons/hi2";
import { menus } from "../constants";
import SwitcherDarkMode from "./SwitcherDarkMode";

const TopBar = () => {
  const router = usePathname();

  return (
    <div className="w-full flex items-center justify-between mt-[50px]">
      <Link href="/">
        <h1 className="text-xl font-bold text-milk-choco dark:text-milk-white cursor-pointer">
          Syarif<span className="text-milk-cyan">.</span>
        </h1>
      </Link>

      <div className="flex items-center gap-12">
        {menus?.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className={`text-lg font-medium text-milk-coffe dark:text-milk-white ${
              router === item.path &&
              "text-milk-cyan dark:text-milk-cyan font-bold"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <SwitcherDarkMode />
    </div>
  );
};

export default TopBar;
