/* eslint-disable @next/next/no-img-element */
import { Button, Container } from "@components";
import React, { FC } from "react";

export const SubscribeSection: FC = () => {
  return (
    <Container className="form-container scale-[0.97] mt-[150px] relative">
      <div className="absolute logo-conner bg-white p-3 rounded-[16px]">
        <img
          src="/images/logo.svg"
          alt="/images/logo.svg"
          className="w-[80px]"
        />
      </div>
      <div className="background-form flex justify-center items-center flex-col">
        <div className="form-title">Ready to Get Started?</div>
        <div className="form-subtitle">Register Now To Stay in the Loop</div>
        <div className="flex justify-center ">
          <div className="email-input">
            <div className="inner">
              <input
                className="input-email"
                type="email"
                onChange={(e) => {}}
                placeholder="Enter your email..."
              />
              <div className="submit-button">
                <div className="text">Register now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
