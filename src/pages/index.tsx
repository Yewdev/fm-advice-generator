import { type NextPage } from "next";
import Head from "next/head";
import Advice from "~/components/Advice";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Advice Generator App</title>
        <meta name="description" content="Advice Generator App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${manrope.className} flex min-h-screen flex-col items-center justify-center bg-[#202631]`}
      >
        <div className="container flex flex-col items-center justify-center px-4 ">
          <Advice />
        </div>
      </main>
    </>
  );
};

export default Home;
