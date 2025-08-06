import Analytics from "@/components/analytics";
import Nav from "@/components/nav";
import PreloadFonts from "@/components/preload-fonts";
import { GlobalProvider } from "@/context/global-context";
import { APP_COLOR, DEFAULT_METADATA } from '@/helpers/metadata';
import { aristoclick } from '@mihilista/aristoclick-logo';
import type { Metadata, Viewport } from "next";
import React from "react";
import "./globals.css";

export const viewport: Viewport = {
    themeColor: APP_COLOR,
}

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    aristoclick();

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
                            "@type": "Person",
                            "name": "Tomáš Bíro",
                            "email": "info@kamenikzbudejovic.cz",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Lomy 44",
                                "postalCode": "378 53",
                                "addressLocality": "Člunek",
                                "addressCountry": "CZ"
                            },
                            "url": "https://www.kamenikzbudejovic.cz"
                        })
                    }}
                />
            </head>
            <body className="min-h-device flex flex-col">
                <Analytics />

                <GlobalProvider>
                    <Nav />
                    <main className="flex-1 py-nav">
                        {children}
                    </main>
                    {/* <Footer /> */}
                </GlobalProvider>

            </body>
        </html>
    );
}
