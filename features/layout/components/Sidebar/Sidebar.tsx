import { IconUser } from '@components/Icons';
import { IconGiving } from '@components/Icons/IconGiving';
import { IconOverview } from '@components/Icons/IconOverview';
import { pageRoutes } from '@config/navigations';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';


interface SidebarItemProps {
  title: string;
  icon: JSX.Element;
  href: string;
}
export const SidebarItem: FC<SidebarItemProps> = ({ title, icon, href }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if ((href !== '/' && router.pathname.includes(href)) || (router.pathname === '/' && href === '/')) setActive(true);
  }, [router.pathname]);

  return (
    <NextLink href={href}>
      <a
        key={title}
        className={clsx(
          'flex gap-x-[12px] items-center w-full font-light cursor-pointer opacity-[0.65] transition-all hover:text-white hover:opacity-[1]',
          { 'opacity-[1]': active },
        )}
      >
        {icon}
        {title}
      </a>
    </NextLink>
  );
};

export const Sidebar: FC = () => {

  const menu = [
    {
      title: "Home",
      href: pageRoutes.overview.pathname,
      icon: <IconOverview className="scale-[1.4]" />,
    },
    {
      title: "Article",
      href: pageRoutes.user.pathname,
      icon: <IconUser className="scale-[1.4]" />,
    },
    {
      title: "User",
      href: pageRoutes.giving.pathname,
      icon: <IconGiving className="scale-[1.4]" />,
    },
   
  ];

  return (
    <div className="sticky top-0 z-50 min-w-[208px] bg-[#001529] h-full overflow-hidden min-h-screen py-[24px] px-[16px]">
      <NextLink href="/">
        <a className="relative w-full flex justify-center">
          {/* <NextImage src={LogoImg} alt="logo" /> */}
        </a>
      </NextLink>
      <div className="flex flex-col mt-[56px] gap-y-[20px] text-white">
        {menu.map((item) => (
          <SidebarItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
