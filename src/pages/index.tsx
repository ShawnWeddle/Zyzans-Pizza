import { type NextPage } from "next";
import Head from "next/head";

import { signIn, signOut, useSession } from "next-auth/react";
import NavBar from "../components/Nav/NavBar";
import Window from "../components/Window/Window";
import MainGrid from "../components/Grid/Grid";

import { api } from "../utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>81 Posts</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-zinc-800">
        <NavBar />
        <div className="flex grow flex-col items-center lg:flex-row lg:items-start lg:justify-center">
          <Window mode="rules" />
          <MainGrid />
        </div>
        <div className="bg-blue-800">FOOTER</div>
      </main>
    </>
  );
};

export default Home;
