import clsx from "clsx";
import React, { forwardRef } from "react";

import { Spinner } from "../../Spinner";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
  fullWidth?: boolean;
  size?: "large" | "normal" | "small";
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      loading = false,
      fullWidth = false,
      size = "normal",
      variant = "contained",
      color = "primary",
      children,
      ...restProps
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={clsx(
          "relative text-center rounded-[2px] font-bold text-xs transition",
          {
            "w-full": fullWidth,
            "text-base h-12 px-[24px] rounded-[4px] font-semibold":
              size === "large",
            "h-[40px] px-[20px]": size === "normal",
            "h-[30px] px-[16px]": size === "small",
            "bg-btn-primary hover:bg-[#0a86f8] text-white rounded-full":
              color === "primary" && variant !== "outlined",
            "bg-btn-secondary hover:bg-orange-300 border border-[#FDE8D9]":
              color === "secondary",
            "bg-transparent hover:bg-white/[.1] border-none":
              variant === "text",
            "bg-transparent hover:bg-[#1a57e7] border rounded-full border-[#1a57e7] font-light text-[#1a57e7] hover:text-white":
              variant === "outlined",

            "pointer-events-none": loading,
          },
          className
        )}
        {...restProps}
      >
        {loading && (
          <div className="flex items-center justify-center absolute w-full h-full top-0 left-0">
            <Spinner />
          </div>
        )}
        <div className={clsx(loading && "invisible")}>{children}</div>
      </button>
    );
  }
);
