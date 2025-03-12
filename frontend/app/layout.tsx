import React from 'react';
import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
    title: 'React App',
    description: 'Web site created using Next.js',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>

            <link rel="apple-touch-icon" href="/logo192.png"/>
            <link rel="manifest" href="/manifest.json"/>
        </head>
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <StoreProvider >{children}</StoreProvider>
        <div className="modal-container"></div>
        </body>
        </html>
    )
}