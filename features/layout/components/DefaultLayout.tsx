import { SEOHead, SEOHeadProps } from '@components';
import React, { FC } from 'react';
import { NavBar } from './NavBar';
import Footer from './Footer';
import { Sidebar } from './Sidebar';

export type LayoutProps = {
  headProps?: SEOHeadProps;
  hideFooter?: boolean;
  loading?: boolean;
};

export const DefaultLayout: FC<LayoutProps> = ({
  headProps,
  children,
  hideFooter,
  // loading
}) => {
  return (
    <div>
      {/* <div className={clsx}></div> */}
      {/* SEO head */}
      <SEOHead {...headProps} />
      <div className="flex h-full">
        <Sidebar />
        <div className="h-full w-full">
          {/* Navigation Bar */}
          <NavBar />
          {/* Main */}
          <div>{children}</div>
          {/* Footer */}
          {!hideFooter && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
