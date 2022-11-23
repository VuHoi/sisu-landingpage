/* eslint-disable @next/next/no-img-element */
import { Container } from "@components";
import React, { FC } from "react";

export const CrossChain: FC = () => {
  return (
    <Container className=" relative  px-[20px] flex justify-center">
      <div className="flex gap-6 items-center ">
        <div className="flex-1">
          <div className="support-title ">
            Cross-chain
            <br />
            API Hub
          </div>
          <div className="text-[17px] leading-[180%] pr-10">
            Different chains can often have different smart contract languages
            that makes it harder to work cross-chain. Sisu allows developers to
            interact with cross-chain contracts as if they were a single chain
          </div>
          <div className="bullets mt-[16px]">
            <div className="bullet">
              Interact cross-chain without learning a new language.
            </div>
            <div className="bullet">Less effort dealing with updates.</div>
            <div className="bullet">Secure and traceable communication.</div>
            <div className="bullet">
              Write a contract once that you can use across chains.
            </div>
          </div>
        </div>
        <img
          className="flex-1 scale-[0.8]"
          src="/images/api.svg"
          alt="/images/api.svg"
        />
      </div>
      {/* </div> */}
    </Container>
  );
};
