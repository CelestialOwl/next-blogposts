import '@/styles/globals.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';
import Layout from 'components/layout/layout';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <Layout>{children}</Layout>

        {/* <div className="grid grid-cols-5 gap-x-8 py-8">
          <div className="col-span-1">
            <GlobalNav />
          </div>

          <div className="col-span-4 space-y-9">
            <AddressBar />

            <div className="rounded-xl border border-zinc-800 bg-white p-8">
              {children}
            </div>
          </div>

          <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
            <div className="text-sm text-zinc-600">
              Created by the <b>Next.js</b>
              {' team at '}
              <a href="https://vercel.com">
                <b>Vercel</b>
              </a>
              {'. '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://github.com/vercel/next.js/tree/canary/examples/with-turbopack"
              >
                View the code
              </a>
              {' or '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://vercel.com/templates/next.js"
              >
                deploy your own
              </a>
              {'.'}
            </div>
          </div>
        </div> */}
        <div id="notifications"></div>
      </body>
    </html>
  );
}
