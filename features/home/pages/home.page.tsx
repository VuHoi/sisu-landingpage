import DefaultLayout from "@features/layout/components/DefaultLayout";
import React, { FC } from "react";

import { Apps } from "../sections/apps";
import { CrossChain } from "../sections/crossChain";
import { DecentralizedToken } from "../sections/decentralizedToken";
import { FeatureSection } from "../sections/feature";
import { IntroduceSection } from "../sections/Introduce";
import { PrivateTransactions } from "../sections/privateTransactions";
import { Question } from "../sections/question";
import { SubscribeSection } from "../sections/subscribe";
import { SupportSection } from "../sections/supported";

export const HomePage: FC = () => {
  return (
    <DefaultLayout headProps={{ seoTitle: "Home" }}>
      <IntroduceSection />
      <FeatureSection />
      <SubscribeSection />
      <SupportSection />
      <DecentralizedToken />
      <CrossChain />
      <PrivateTransactions />
      <Apps />
      <Question />
      <SubscribeSection />
    </DefaultLayout>
  );
};
