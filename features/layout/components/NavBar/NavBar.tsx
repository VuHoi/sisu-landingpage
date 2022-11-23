/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */

import { Button } from "@components";
import useOnClickOutside from "@hooks/useClickOutside";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useRef, useState } from "react";
const routes = [
  { title: "Home", href: "/" },
  { title: "Roadmap", href: "/roadmap" },
  {
    title: "Testnet",
    href: "/testnet",
    type: "dropdown",
    menu: [
      {
        title: "Reward Information",
        href: "https://docs.google.com/document/d/1SSFrsW1kXYciA92zwM0qyLc5fi-YerHgrCZ0c1ixttY/edit",
        target: "_blank",
      },
      {
        title: "Testnet dex User guide",
        href: "https://docs.google.com/document/d/1_XszdG7O8A8rpAQzHzSTGaOQFtcOd9f8Bvs8SgNYfPs/edit",
        target: "_blank",
      },
      {
        title: "About the Testnet",
        href: "https://sisu.network/testnet",
      },
      {
        title: "Testnet Dex",
        href: "https://app.ko.exchange/",
        target: "_blank",
      },
      {
        title: "Testnet Leaderboard",
        href: "https://sisu.network/testnet#",
      },
      {
        title: "Submit your contribution",
        href: "https://sisu.network/register",
      },
    ],
  },
  { title: "Blog", href: "https://medium.com/@sisunetwork", type: "_blank" },
];

const NavItem: FC = ({
  title,
  href,
  menu,
  type = "internalLink",
  ...props
}: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  // State for our modal
  if (type === "internalLink") {
    return (
      <Link href={href} passHref>
        <a
          className={clsx(
            "no-underline text-[16px]  font-medium pb-2 relative top-0",
            {
              "text-black": true,
              "active-link": router.pathname === href,
            }
          )}
          {...props}
        >
          {title}
        </a>
      </Link>
    );
  } else if (type === "dropdown") {
    return (
      <span
        ref={ref as any}
        className={clsx(
          "no-underline text-[16px] cursor-pointer font-medium  pb-2 relative top-0 bg-white",
          {
            "text-black": true,
            "active-link": router.pathname === href,
          }
        )}
        onClick={() => {
          setOpen((e) => !e);
        }}
        {...props}
      >
        {title}
        <div
          className={clsx(
            "border  border-[rgba(0,_0,_0,_0.176)] bg-white flex border-solid w-[530px] z-[1000] absolute top-[40px] left-0  rounded-[12px] transition-all",
            { " invisible opacity-50 translate-y-[-20px]": !open },
            { " visible opacity-1 translate-y-[0px]": open }
          )}
        >
          <div
            className="flex flex-col flex-1 "
            style={{ borderRight: "1px solid rgba(0, 0,0, 0.176)" }}
          >
            <div className="p-5 pt-3">
              <div className="text-center font-medium py-[1.5rem]">
                Sisu Testnet User Guide
              </div>
              <div className=" font-light">
                An in-depth walkthrough of how to set up Sisu on ur machine
              </div>
            </div>
            <div className="mt-[0.5rem]  overflow-hidden">
              <div className="block px-[24px] py-[18px] font-light cursor-pointer hover:bg-[#e9ecef]">
                <a
                  href={menu[0].href}
                  className="no-underline  text-black"
                  target="_blank"
                >
                  {" "}
                  {menu[0].title}
                </a>
              </div>
              <div className="block px-[24px] py-[18px] font-light cursor-pointer hover:bg-[#e9ecef]">
                <a
                  href={menu[1].href}
                  className="no-underline  text-black"
                  target="_blank"
                >
                  {" "}
                  {menu[1].title}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="mt-[1.5rem]  overflow-hidden">
              <div className="block px-[24px] py-[18px] font-light cursor-pointer hover:bg-[#e9ecef]">
                <a href={menu[2].href} className="no-underline  text-black">
                  {" "}
                  {menu[2].title}
                </a>
              </div>
              <div className="block px-[24px] py-[18px] font-light cursor-pointer hover:bg-[#e9ecef]">
                <a href={menu[3].href} className="no-underline  text-black">
                  {" "}
                  {menu[3].title}
                </a>
              </div>
              <div className="block px-[24px] py-[18px] font-light cursor-pointer hover:bg-[#e9ecef]">
                <a href={menu[4].href} className="no-underline  text-black">
                  {" "}
                  {menu[4].title}
                </a>
              </div>
              <div className="block px-[24px] py-[18px] font-light cursor-pointer hover:bg-[#e9ecef]">
                <a href={menu[5].href} className="no-underline  text-black">
                  {" "}
                  {menu[5].title}
                </a>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
  return (
    <a
      className={clsx(
        "no-underline text-[16px]  pb-2 font-medium relative top-0 cursor-pointer",
        {
          "text-black": true,
          "active-link": router.pathname === href,
        }
      )}
      href={href}
      target="_blank"
    >
      {title}
    </a>
  );
};
export const NavBar: FC = () => {
  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Menu items */}
      <div className="flex items-center justify-center w-full  h-[92px] bg-white">
        <div className="w-full max-w-[1320px] flex justify-between items-center p-[1rem]">
          <img className="h-[60px]" src="/images/logo.svg" alt="logo" />
          <div className="flex items-center justify-between w-full ml-[30px] sm:w-[80%]">
            <div className="flex items-center justify-between gap-[32px]">
              {routes.map((item: any) => (
                <NavItem key={item.title} {...item} />
              ))}
            </div>
            <div className="flex gap-[20px] mt-[-5px]">
              <Link href="#">
                <a className=" no-underline ">
                  <img src="/images/discord.svg" alt="discord" />
                </a>
              </Link>

              <Link href="#">
                <a className=" no-underline ">
                  <img src="/images/twitter.svg" alt="twitter" />
                </a>
              </Link>
            </div>
            <Button variant="outlined">
              <span className="flex gap-2 px-[16px]">
                Login{" "}
                <img
                  alt="/images/arrow-right.svg"
                  src="/images/arrow-right.svg"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
