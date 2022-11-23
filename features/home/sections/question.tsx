/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Container } from "@components";
import React, { FC, useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: any) => {
  const handleSetIndex = (index: any) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <div className="border-b w-full">
      <div
        onClick={() => handleSetIndex(index)}
        className="flex justify-between w-full py-2 mt-2 "
      >
        <div>{title}</div>
        {activeIndex !== index && (
          <img src="/images/chevron-right.svg" alt="chevron-right" />
        )}
      </div>

      {activeIndex === index && (
        <div className="pb-2 text-[14px]">{children}</div>
      )}
    </div>
  );
};

export default AccordionLayout;

export const Question: FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="bg-white">
      <Container className="  mt-[100px]  px-[40px] ">
        <div className="flex gap-10">
          <div className="w-full">
            <div className="support-title">Frequently Asked Questions</div>

            <div className="flex flex-col mt-[20px] w-full">
              <AccordionLayout
                title="What is Sisu?"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Sisu is a decentralized blockchain that powers cross-chain
                communication. We support cross-chain token swapping (e.g.
                native, ERC20 or ERC721) to facilitate digital monetary
                transactions like Bitcoin, Crypto, and other digital currencies.
                Sisu can support almost all modern blockchains, and we are
                adding more and more supported tokens as we progress. Our
                network also allows developers to interact with cross-chain
                contracts as if they are working on the same chain to reduce
                time spent learning new languages and help them build their own
                networks.
              </AccordionLayout>

              <AccordionLayout
                title="How does Sisu work?"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Sisu deploys gateway smart contracts (or account in the case of
                Bitcoin) at each chain. Users send requests to one of these
                contracts to initiate cross-chain transactions. This information
                is public and recorded by all Sisu nodes, maintaining
                decentralization. Each transaction request must be recorded by
                at least ⅔ nodes in the network to be considered final, and each
                transaction output must be signed by 80% of super validators in
                the network.
              </AccordionLayout>
              <AccordionLayout
                title="What is the advantage of Sisu over a centralized bridge?"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                A common solution by many centralized bridges is to hold a
                single private key to control gateway contracts or AMM. This is
                a serious security issue as the private key could be hacked or
                the key holder could run away with the fund. Sisu leverages
                distributed key signing algorithms to secure cross-chain
                transactions. No private key is ever assembled even during the
                transaction signing. The decentralization nature of Sisu enables
                other teams to cross chain apps like DEX without KYC process to
                trade non-custodian assets. This simplifies the verification and
                registration process for end users who want to trade tokens or
                do yield farming.
              </AccordionLayout>

              <AccordionLayout
                title="Will there be a Sisu token?"
                index={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Yes, the token name is SISU and the distribution plan will be
                announced later by the development team.
              </AccordionLayout>
              <AccordionLayout
                title="How many Sisu tokens are there?"
                index={5}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Sisu can support almost all modern blockchain but we will start
                with Etherem-compatible blockchains. Next step is to include
                chains without smart contracts like Bitcoin, Litecoin, and
                finally, other newer chains like Solana, Avalanche.
              </AccordionLayout>
              <AccordionLayout
                title="Can Sisu support private transactions?"
                index={6}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                Though this feature is still in research mode with promising
                results, Sisu’s confidential transaction is on the later phase
                of our roadmap. Privacy is one of our fundamental rights and
                Sisu commits to shield user’s transactions. This privacy is
                optional for each transaction on Sisu with some additional cost
                compared to unshielded ones.
              </AccordionLayout>
            </div>
          </div>

          <div className="right">
            <img className="icon" src="/images/question-mark.svg" alt="" />
            <div className="title">Have different questions?</div>
            <div className="subtitle">
              Just ask us and we'll get back to you soon
            </div>
            <a className="send-email-button" href="mailto:contact@sisu.network">
              <img src="/assets/mail.svg" alt="" />
              Shoot a Direct Mail
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
