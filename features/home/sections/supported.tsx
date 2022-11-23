/* eslint-disable @next/next/no-img-element */
import { Container } from "@components";
import React, { FC } from "react";

export const SupportSection: FC = () => {
  return (
    <Container className=" relative mt-[200px] px-[20px] flex justify-center">
      <div className="flex ">
        <div className="support-title">
          Supported
          <br />
          Chains
        </div>
        {/* <div className="flex  justify-end "> */}
        <img src="/images/logos.svg" alt="/images/logos.svg" />
      </div>
      {/* </div> */}
    </Container>
  );
};
