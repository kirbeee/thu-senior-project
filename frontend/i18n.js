// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';

const i18nextOptions = {
    backend: {
        loadPath: path.resolve('./public/locales/{{lng}}/{{ns}}.json'), // 翻譯檔案載入路徑
    },
    debug: process.env.NODE_ENV === 'development', // 開發模式下啟用 debug 模式
    fallbackLng: 'zh-TW', // 回退語言
    interpolation: {
        escapeValue: false, // React already safes from xss
    },
    load: 'languageOnly', // 只載入語言代碼，例如 'en'，不載入地區代碼 'en-US'
    ns: ['common', 'home'], // 預設命名空間
    defaultNS: 'common', // 預設命名空間
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init(i18nextOptions);

export default i18n;