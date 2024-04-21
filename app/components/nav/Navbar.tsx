import React from "react";
import Image from "next/image";

import NavItems from "./NavItems";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className=" mx-auto max-w-[1300px] pl-[25px] p-2.5 rounded-[18px] w-full h-fit  bg-[#525AA0] text-white flex justify-between drop-shadow-xl ">
      <Link href={"/"} className="block my-auto">
        <Image
          className="object-contain w-28 hover:scale-105"
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <NavItems />
      <div className="hidden lg:block space-x-5">
        <button className="hover:font-bold">Log In</button>
        <button className="bg-white hover:bg-slate-200 transition-all text-[#202229] rounded-[16px] px-6 py-[14px] duration-200 ease-in-out ">
          Join Now
        </button>
      </div>
      <div className="lg:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
