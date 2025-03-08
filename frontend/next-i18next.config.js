// next-i18next.config.js
/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        defaultLocale: 'zh-TW', // 預設語系
        locales: ['en', 'zh-TW'], // 支援的語系列表
        localeDetection: false, // 停用瀏覽器語系偵測，改用 path 或其他方式切換語系
    },
    namespaces: ['common', 'header', 'layout', 'courses', 'translation'],
    /** To avoid issues when deploying to some serverless environments like Vercel */
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};