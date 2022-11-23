/* eslint-disable @next/next/no-img-element */
import { Container } from "@components";
import React, { FC } from "react";

export const DecentralizedToken: FC = () => {
  return (
    <Container className=" relative mt-[120px] px-[20px] flex justify-center">
      <div className="flex gap-6  ">
        <img
          className="flex-1 scale-90"
          src="/images/decentralized.svg"
          alt="/images/decentralized.svg"
        />

        <div className="flex-1">
          <div className="support-title ">
            Supported
            <br />
            Chains
          </div>
          <div className="text-[17px] leading-[180%]">
            Centralized exchanges can be more vulnerable to single point of
            failure. Sisu uses advanced cryptography algorithms for cross-chain
            communication that stays secure, decentralized, and with no private
            keys.
          </div>
          <div className="bullets mt-[16px]">
            <div className="bullet">
              Swap native and NFT tokens cross-chain.
            </div>
            <div className="bullet">No single point of failure.</div>
            <div className="bullet">Secure and traceable communication.</div>
            <div className="bullet">100% “trustless”</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
};
