import { type NextPage } from "next";
import Head from "next/head";
import Advice from "~/components/Advice";
import { Manrope } from "next/font/google";
import Link from "next/link";

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
      {/* Coded by */}
      <div className="group absolute right-0 bottom-0 flex items-end gap-1 rounded-tl-xl bg-white/5 py-3 px-2 text-sm tracking-wide text-white/70  duration-1000 hover:bg-black hover:text-white hover:shadow-[0_0_30px_0px_#50ffa8] lg:px-8 lg:py-4">
        <span className="border-b border-transparent text-xs duration-500 lg:text-sm">
          Challenge by
        </span>
        <Link
          className="border-b border-transparent text-xs  font-bold duration-500 hover:border-[#50ffa8]  group-hover:text-[#50ffa8] lg:text-sm"
          target={"_blank"}
          href={"https://www.frontendmentor.io/profile/Yewdev"}
        >
          Frontend Mentor.
        </Link>
        <span className="border-b border-transparent text-xs duration-500 lg:text-sm">
          Coded by
        </span>
        <Link
          className="border-b border-transparent text-xs font-bold duration-500 hover:border-[#50ffa8] group-hover:text-[#50ffa8] lg:text-sm"
          target={"_blank"}
          href={"https://github.com/Yewdev"}
        >
          Yewdev
        </Link>
      </div>
    </>
  );
};

export default Home;
