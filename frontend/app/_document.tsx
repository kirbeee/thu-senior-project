import { Html, Head, Main, NextScript } from 'next/document'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'React App',
    description: 'Web site created using Next.js',
};
export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}