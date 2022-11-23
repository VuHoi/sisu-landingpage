/* eslint-disable @next/next/no-img-element */
import { Container } from "@components";
import React, { FC } from "react";

export const Apps: FC = () => {
  return (
    <div className="px-[24px]">
      <div className="apps-container pb-[100px] ">
        <Container className=" relative mt-[100px]  px-[40px] ">
          <div className="absolute left-0">
            <div className="support-title ">
              Apps that Can
              <br />
              Interact With
              <br />
              SiSu
            </div>
          </div>
          <div className="flex justify-end">
            <img src="/images/app-logos.svg" alt="/images/app-logos.svg" />
          </div>
          {/* </div> */}
        </Container>
      </div>
    </div>
  );
};
