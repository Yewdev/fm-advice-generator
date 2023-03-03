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
      <div className="group absolute right-0 bottom-0 flex items-end gap-2 rounded-tl-xl bg-white/5 py-3 pl-2 pr-10 text-sm tracking-widest text-white/70  duration-1000 hover:bg-black hover:text-white   hover:shadow-[0_0_30px_0px_#50ffa8]">
        <span className="duration-500 group-hover:text-2xl">Challenge by</span>
        <Link
          className="border-b border-transparent text-base  font-bold duration-500 hover:border-[#50ffa8] group-hover:text-3xl group-hover:text-[#50ffa8]"
          target={"_blank"}
          href={"https://www.frontendmentor.io/profile/Yewdev"}
        >
          Frontend Mentor.
        </Link>
        <span className="duration-500 group-hover:text-2xl">Coded by</span>
        <Link
          className="border-b border-transparent  text-base font-bold duration-500 hover:border-[#50ffa8] group-hover:text-3xl group-hover:text-[#50ffa8]"
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
