import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import { GlobalProvider } from "@/context/global-context";
import PreloadFonts from "@/components/preload-fonts";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";
import { APP_COLOR, APP_NAME, APP_URL, DEFAULT_METADATA } from '@/helpers/metadata';

export const viewport: Viewport = {
    themeColor: APP_COLOR,
}

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cs"
            className="scroll-smooth"
        >
            <head>
                <PreloadFonts />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": APP_NAME,
                            "url": APP_URL,
                            "logo": `${APP_URL}/images/logo.png`
                        })
                    }}
                />
            </head>
            <body className="min-h-device flex flex-col">
                <Analytics />

                <GlobalProvider>
                    <Nav />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </GlobalProvider>

            </body>
        </html>
    );
}
