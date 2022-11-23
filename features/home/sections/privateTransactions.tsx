/* eslint-disable @next/next/no-img-element */
import { Container } from "@components";
import React, { FC } from "react";

export const PrivateTransactions: FC = () => {
  return (
    <Container className=" relative  px-[20px] flex justify-center">
      <img
        className="flex-1 scale-[0.8]"
        src="/images/private.svg"
        alt="/images/private.svg"
      />
      <div className="flex gap-6 items-center ">
        <div className="flex-1">
          <div className="support-title ">Private Transactions</div>
          <div className="text-[17px] leading-[180%]">
            Sisu supports privacy and security across our network. Small add-ons
            allow private transfers across chains.
          </div>
          <div className="bullets mt-[16px]">
            <div className="bullet">Shielded cross-train transactions</div>

            <div className="bullet">Optional privacy add-on features.</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
};
