const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'], // Vietnamese, English
    localeDetection: false,
  },
  // Set suspense to "false" to prevent timeouts on Vercel when using getServerSideTranslations
  react: {
    useSuspense: false,
  },
  localePath: path.resolve('./public/locales'),
};
