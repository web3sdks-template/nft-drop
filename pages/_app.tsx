import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import "../styles/globals.css";
import Head from "next/head";
import Web3sdksGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdks NFT Drop Minting Customizable Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Web3sdks's NFT Drop contract and create a customizable NFT Drop minting page"
        />
        <meta
          name="keywords"
          content="Web3sdks, web3sdks NFT drop, how to make web3sdks nft drop, how to make nft collection web3sdks"
        />
      </Head>
      <Component {...pageProps} />
      <Web3sdksGuideFooter />
    </Web3sdksProvider>
  );
}

export default MyApp;
