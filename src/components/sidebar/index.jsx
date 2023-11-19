/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./componentsrtl/Links";

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";
import { useState, useEffect } from "react";

const Sidebar = ({ open, onClose }) => {
  const [scrolled, setScrolled] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      console.log(`${90 - window.scrollY}px`);
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 ${
        scrolled ? "" : "mt-[90px]"
      } flex ${
        scrolled ? "min-h-full" : "min-h-[calc(100%_-_90px)]"
      } flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Horizon <span class="font-medium">FREE</span>
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        <SidebarCard />
      </div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
