const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    localePath: path.resolve('./public/i18n'),
    react: {
        wait: false,
        useSuspense: true,
    },
    detection: {
        caches: ['cookie'],
        cookieSameSite: 'strict',
        lookupCookie: 'next-i18next',
        order: ['querystring', 'cookie', 'header'],
    },
};
