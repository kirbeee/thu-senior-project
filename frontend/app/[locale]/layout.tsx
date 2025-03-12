import React from 'react';
import StoreProvider from "@components/StoreProvider";
// import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';
import "../ui/index.css";
import '../../i18n/settings'
import { dir } from 'i18next'
import { languages } from '../../i18n/settings'

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default function RootLayout({children,
    params: {lng}
                                   }
) {
    return (
        <html lang={lng} dir={dir(lng)}>
        <body>
            <StoreProvider >
                {/*<Header/>*/}
                {children}
                <Footer/>
            </StoreProvider>
        </body>
        </html>
    )
}