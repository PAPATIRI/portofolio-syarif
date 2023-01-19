"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight, HiSun, HiMoon } from "react-icons/hi2";
import { menus } from "../constants";

const TopBar = () => {
  const router = usePathname();

  return (
    <div className="w-full flex items-center justify-between mt-[50px]">
      <Link href="/">
        <h1 className="text-xl font-bold text-milk-choco cursor-pointer">
          Syarif<span className="text-milk-cyan">.</span>
        </h1>
      </Link>

      <div className="flex items-center gap-12">
        {menus?.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className={`text-lg font-medium text-milk-coffe ${
              router === item.path && "text-milk-cyan font-bold"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* <HiSun className="h-8 w-8 text-milk-coffe cursor-pointer" /> */}
      <HiMoon className="h-8 w-8 text-milk-coffe cursor-pointer" />
    </div>
  );
};

export default TopBar;
