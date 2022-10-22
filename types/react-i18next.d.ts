/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import 'react-i18next';

import type account from '../public/locales/vi/account.json';
import type common from '../public/locales/vi/common.json';


declare module 'react-i18next' {
  // eslint-disable-next-line no-unused-vars
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      account: typeof account;
   
    };
  }
}
