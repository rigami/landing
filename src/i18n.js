const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
    otherLanguages: ['ru'],
    localeSubpaths,
    localePath: path.resolve('./public/i18n'),
    interpolation: { escapeValue: false },
});
