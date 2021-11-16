import Head from "next/head";
import "react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Footer from "../components/Layout/Footer";
import Nav from "../components/Layout/Nav";
import Store from "../components/Store/Store";
import { ONE_HOUR_MS, ONE_MINUTES_MS } from "../lib/constants";
import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: ONE_MINUTES_MS,
      cacheTime: ONE_HOUR_MS,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Store>
        <Head>
          <title>BTC Flower</title>
        </Head>
        <div className="flex flex-col items-center bg-theme-bg">
          <div className="flex flex-col gap-10 justify-between min-h-screen w-full sm:max-w-screen-lg px-4">
            <main className="flex flex-col justify-start">
              <Nav />

              <Component {...pageProps} />
            </main>

            <Footer />
          </div>
        </div>
      </Store>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
