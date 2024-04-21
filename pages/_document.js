import { Html, Head, Main, NextScript } from "next/document"; 
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <SiteHeader />
                <Main />
                <NextScript />
                <SiteFooter />
            </body>
        </Html>
    );
}