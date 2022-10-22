import { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export type ContainerProps = ComponentPropsWithoutRef<'div'>;

export const Container: FC<ContainerProps> = ({ children, className, ...restProps }) => {
  return (
    <div className={clsx('w-full max-w-[1200px] mx-auto px-[20px]', className)} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
