/* eslint-disable @next/next/no-img-element */
import { Button } from "@components";
import clsx from "clsx";
import React, { FC } from "react";

export type CardProps = {
  background: string;
  picture: string;
  title: string;
  description: string;
  [key: string]: any;
};

export const Card: FC<CardProps> = ({
  background,
  picture,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={clsx(
        " rounded-[12px] min-h-[510px] py-[38px] px-[42px]",
        className
      )}
      style={{ backgroundColor: background }}
    >
      <div className="flex justify-center">
        <img src={picture} className="w-[332px] h-[198px]" alt={picture} />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};
