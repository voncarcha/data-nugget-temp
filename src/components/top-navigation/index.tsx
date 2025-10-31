"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import { MenuOpen, MenuClose } from "./Icons";
import Link from "next/link";

const TopNavigation = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section
      className={classNames(
        "fixed top-0 left-0 z-20 w-full px-[15px] transition-all duration-300 md:px-[42px]",
        {
          "bg-transparent": isAtTop,
          "bg-primary": !isAtTop,
          "translate-y-0": isScrollingUp || isMenuOpen,
          "-translate-y-full": !isScrollingUp && !isMenuOpen,
        },
      )}
    >
      <nav className="3xl:max-w-[1410px] mx-auto flex w-full max-w-[940px] items-center justify-between h-[64px] 2xl:max-w-[1170px]">
        <Link href="/" aria-label="Go to home" className="hidden md:block">
          <Image
            src="/images/logo-hero.png"
            alt="logo"
            width={272}
            height={20}
          />
        </Link>
        <Link href="/" aria-label="Go to home" className="block md:hidden">
          <Image
            src="/images/logo-icon-white.png"
            alt="logo"
            width={21}
            height={20}
          />
        </Link>
        <a
          href="mailto:info@datanugget.net"
          className="hidden text-[18px] font-medium text-white hover:underline xl:block"
        >
          Contact Us
        </a>
        <button
          className="block xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MenuClose /> : <MenuOpen />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 mt-[64px] h-[calc(100vh-64px)] w-full bg-black">
          <div className="flex h-full flex-col items-start justify-between">
            <ul className="flex flex-col items-start justify-center gap-[20px] px-[15px] pt-[20px] text-[18px] leading-none font-medium text-white md:px-[42px]">
              <li>
                <a href="mailto:info@datanugget.net" onClick={handleCloseMenu}>
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/terms-and-conditions" onClick={handleCloseMenu}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-and-cookie-policy"
                  onClick={handleCloseMenu}
                >
                  Privacy & Cookie Policy
                </Link>
              </li>
              <li>
                <a href="mailto:info@datanugget.net" onClick={handleCloseMenu}>
                  info@datanugget.net
                </a>
              </li>
            </ul>
            <Image
              src="/images/logo-menu.png"
              alt="logo"
              width={77}
              height={76}
              className="mx-auto block pb-[50px]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TopNavigation;
