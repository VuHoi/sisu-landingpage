/* eslint-disable @next/next/no-img-element */
import { Container } from "@components";
import React, { FC } from "react";

import { Card } from "../components/card";

export const FeatureSection: FC = () => {
  return (
    <Container>
      <div className="flex flex-wrap gap-4">
        <Card
          className="flex-1"
          background="rgb(255, 239, 237)"
          picture="/images/convert.svg"
          title="Easy Transfer"
          description="Sisu supports native, NFT token swapping and contract data transfer. Move your assets cross chain seamlessly."
        />
        <Card
          className="flex-1"
          background="rgb(248, 237, 255)"
          picture="/images/trustless.svg"
          title="100% Trustless"
          description="No one holds a chain's private key. All transactions stay decentralized."
        />
        <Card
          className="flex-1"
          background="rgb(237, 241, 255)"
          picture="/images/fingerprint.svg"
          title="Private Transactions"
          description="Optional add-ons to make native token swapping private or obfuscated for extra security."
        />
      </div>
    </Container>
  );
};
