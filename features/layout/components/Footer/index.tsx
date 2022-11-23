/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center  items-center flex-col">
      <div className="flex justify-center mt-[136px]">
        <img width={"8rem"} src="/images/logo.svg" alt="logo" />
      </div>
      <div className="footer">Sisu, Inc. © 2022 All rights reserved.</div>
      <div className="social-media">
        <a
          className="social-media-item"
          href="https://twitter.com/sisunetwork"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/twitter.svg" alt="Twitter" />
        </a>
        <a
          className="social-media-item"
          href="https://discord.gg/DT7xAKCQJD"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/discord.svg" alt="Discord" />
        </a>
        <a
          className="social-media-item"
          href="https://github.com/sisu-network"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/github.svg" alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
