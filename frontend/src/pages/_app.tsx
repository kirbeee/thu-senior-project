import React from "react";
import Layout from '@components/layouts/Layout'
import { appWithTranslation } from "next-i18next";
import i18nConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(MyApp, i18nConfig);