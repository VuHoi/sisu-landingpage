/* eslint-disable @next/next/no-img-element */
import { Button, Container } from "@components";
import React, { FC } from "react";

export const IntroduceSection: FC = () => {
  return (
    <div className="flex justify-center relative px-[32px]">
      <Container className="absolute w-full">
        <div className=" w-full introduce-container">
          <div className="flex gap-[64px] flex-col max-w-[600px] ">
            <div className="introduce-heading ">
              Unify the Fragmented Blockchain World
            </div>
            <div>
              Blockchain world is fragmented. Everyone is living in their own
              chain. Sisu network is the decentralized cross-chain communication
              network that allows native & NFT tokens swapping or remote
              contract execution for a more seamless blockchain experience.
            </div>

            <div className="flex justify-center">
              <Button className=" scale-125" variant="contained">
                Join our community
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="introduce flex w-full rounded-[18px]">
        <div className="flex-1 invisible"></div>
        <img
          className="flex-1 w-full  scale-[0.75] mt-[-100px]"
          src="/images/slider-pic.svg"
          alt="public/images/slider-pic.svg"
        />
      </div>
    </div>
  );
};
