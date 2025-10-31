"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import { MenuOpen } from "./Icons";

const TopNavigation = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < prevScrollY);
      setIsAtTop(currentScrollY < 200);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <section
      className={classNames(
        "fixed top-0 left-0 z-20 w-full px-[15px] transition-all duration-300 md:px-[42px]",
        {
          "bg-transparent": isAtTop,
          "bg-primary": !isAtTop,
          "translate-y-0": isScrollingUp,
          "-translate-y-full": !isScrollingUp,
        },
      )}
    >
      <nav className="3xl:max-w-[1410px] mx-auto flex w-full max-w-[940px] items-center justify-between py-[20px] 2xl:max-w-[1170px]">
        <Image
          src="/images/logo-hero.png"
          alt="logo"
          width={272}
          height={20}
          className="hidden md:block"
        />
        <Image
          src="/images/logo-icon-white.png"
          alt="logo"
          width={21}
          height={20}
          className="block md:hidden"
        />
        <a
          href="mailto:info@datanugget.net"
          className="hidden text-[18px] font-medium text-white hover:underline xl:block"
        >
          Contact Us
        </a>
        <button className="block xl:hidden">
          <MenuOpen />
        </button>
      </nav>
    </section>
  );
};

export default TopNavigation;
