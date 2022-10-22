import { IconCopyright } from '@components/Icons/IconCopyright';
import React from 'react';

export const Footer = () => {

  return (
    <div className='flex justify-center my-[30px] items-center gap-x-[3px] opacity-[0.45]'>
      Copyright <IconCopyright className='scale-[1.4] ml-[3px] mt-[2px]' /> 2021
    </div>
  );
};

export default Footer;
