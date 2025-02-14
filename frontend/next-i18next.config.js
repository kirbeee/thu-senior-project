// next-i18next.config.js

module.exports = {
    i18n: {
        locales: ['en', 'jp', 'zh-TW'],
        defaultLocale: 'en',
        localePath: './public/locales',
    },
    fallbackLng: {
        default: ['en'],
    },
};
