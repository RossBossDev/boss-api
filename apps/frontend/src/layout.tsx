import { Head } from '@inertiajs/react';
import type React from 'react';
// @ts-ignore
import '@fontsource/inter';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <title>Ross Boss Dev</title>
                <meta name="description" content="Ross Boss Dev" />
            </Head>
            <body>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
