import { IconSearch } from '@components/Icons';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

import inputStyles from '../Input.module.scss';

export interface SearchInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: 'x-large' | 'large' | 'medium';
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { className, size = 'normal', ...restProps },
  ref,
) {
  return (
    <div className={clsx(inputStyles.root, className)}>
      <div
        className={clsx(inputStyles.inputWrapper, {
          [inputStyles.sizeXLarge]: size === 'x-large',
          [inputStyles.sizeLarge]: size === 'large',
          [inputStyles.sizeMedium]: size === 'medium',
        })}
      >
        <input ref={ref} type="text" className={inputStyles.input} {...restProps} />
        <div className="px-[15px]">
          <IconSearch width={18} height={18} />
        </div>
      </div>
    </div>
  );
});
