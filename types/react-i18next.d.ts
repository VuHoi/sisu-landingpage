/**
 * Types augmentation for translation keys to allow to typecheck
 * and suggesting keys to the t function. In case it's too slow
 * you can opt out by commenting the following code.
 * @link https://react.i18next.com/latest/typescript
 */
import 'react-i18next';
import type common from '../public/locales/vi/common.json';
import type overview from '../public/locales/vi/overview.json';
import type account from '../public/locales/vi/account.json';
import type user from '../public/locales/vi/user.json';
import type giving from '../public/locales/vi/giving.json';
import type order from '../public/locales/vi/order.json';
import type setting from '../public/locales/vi/setting.json';
import type newRequest from '../public/locales/vi/newRequest.json';

declare module 'react-i18next' {
  // eslint-disable-next-line no-unused-vars
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      overview: typeof overview;
      account: typeof account;
      user: typeof user;
      giving: typeof giving;
      order: typeof order;
      setting: typeof setting;
      newRequest: typeof newRequest;
    };
  }
}
