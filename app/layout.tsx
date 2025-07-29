import React from "react";
import type {Metadata} from "next";
import Header from "@/components/Header";
import "./globals.css";

import {Roboto_Mono} from "next/font/google";

export const metadata: Metadata = {
    title: "Clash Royale Cards",
    description: "Find all the cards in the game",
};

const robotoMono = Roboto_Mono({subsets: ["latin"]});

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>)
{
    return (
        <html lang="en">
        <body
            className={`${robotoMono.className} antialiased min-h-screen bg-gradient-to-b from-red-50 to-red-100`}
        >
        <Header/>
        {children}
        </body>
        </html>
    );
}

