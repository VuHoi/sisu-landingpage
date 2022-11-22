import { IconBell } from "@components/Icons/IconBell";
import { layoutConfig } from "@features/layout/layout.config";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const NavBar: FC = () => {
  const { t } = useTranslation(layoutConfig.i18nNamespaces);
  // const user = useAppSelector(userSelector);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Menu items */}
      <div className="flex items-center gap-x-[20px] pr-[20px] justify-end h-[48px] bg-white shadow-[0_1px_4px_0_rgba(0,21,41,0.12)] w-full font-light ">
        <IconBell className="scale-[1.2] opacity-[0.65] hover:opacity-[1] cursor-pointer" />
        {/* <div className="h-[24px] w-[24px] bg-[#D4D7D9] rounded-full cursor-pointer">
          {user?.avatar ? (
            <img src={user.avatar} alt={user?.full_name} />
          ) : (
            <Avatar>{getLetterAvatar(user?.full_name || '')}</Avatar>
          )}
        </div>
        <span className="dropdown-auth opacity-[0.65] hover:opacity-[1] cursor-pointer relative">
          {user?.full_name}
          <div className="dropdown-content-auth absolute top-[30px] bg-[white]  right-0  shadow-[0_1px_4px_0_rgba(0,21,41,0.12)]">
            <div
              onClick={() => {
                logout();
              }}
            >
              {t('common:logout')}
            </div>
          </div>
        </span> */}
      </div>
    </div>
  );
};

export default NavBar;
