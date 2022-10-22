import { FC, SVGProps } from 'react';

export const IconCopy: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(-6515 9235)">
        <g transform="translate(6515 -9235)" fill="none">
          <path d="M4,17V12H0V0H12V5h4V17Z" stroke="none" />
          <path
            d="M 15.00020027160645 16.00010108947754 L 15.00020027160645 6.000400543212891 L 10.99970054626465 6.000400543212891 L 10.99970054626465 1.000000596046448 L 1.00000011920929 1.000000596046448 L 1.00000011920929 10.99970054626465 L 4.999599933624268 10.99970054626465 L 4.999599933624268 16.00010108947754 L 15.00020027160645 16.00010108947754 M 16.00020027160645 17.00010108947754 L 3.999600172042847 17.00010108947754 L 3.999600172042847 11.99970054626465 L 1.358032193365943e-07 11.99970054626465 L 1.358032193365943e-07 5.447387820822769e-07 L 11.99970054626465 5.447387820822769e-07 L 11.99970054626465 5.000400543212891 L 16.00020027160645 5.000400543212891 L 16.00020027160645 17.00010108947754 Z"
            stroke="none"
            fill={props.color || '#a7bedb'}
          />
        </g>
        <g transform="translate(6519 -9230)" fill="none" stroke={props.color || '#a7bedb'} strokeWidth="1">
          <rect width="12" height="12" stroke="none" />
          <rect x="0.5" y="0.5" width="11" height="11" fill="none" />
        </g>
      </g>
    </svg>
  );
};
