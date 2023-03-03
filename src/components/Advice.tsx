import { useState } from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Advice() {
  const [{ id, advice }, setAdvice] = useState({
    id: 117,
    advice: `It is easy to sit up and take notice, what's difficult is getting
    up and taking action`,
  });
  const {
    data: slip,
    refetch,
    isFetching,
    isLoading,
  } = api.advice.get.useQuery();

  return (
    <>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="group relative mb-10 flex max-w-[26rem] flex-col items-center gap-8 rounded-2xl bg-[#313a49] px-6 py-8 shadow-[0_0_30px_-15px_#50ffa8] duration-1000 selection:bg-[#50ffa8] selection:text-[#313a49] hover:bg-[#2a323f] hover:shadow-[#50ffa881] md:max-w-[34rem] md:px-10 md:py-14 lg:shadow-[0_0_50px_-15px_#50ffa8]"
      >
        <span className="select-none text-xs font-semibold tracking-[0.2em] text-[#50ffa8] md:tracking-[0.4em]">
          ADVICE #
          <motion.span
            key={id}
            variants={variantsId}
            animate="show"
            initial="hide"
          >
            {id}
          </motion.span>
        </span>
        <motion.h1
          key={id}
          variants={variantsAdvice}
          animate="show"
          initial="hide"
          className="text-center text-2xl font-bold text-[#cfe3ea] transition-colors duration-300 group-hover:text-white md:text-3xl md:font-semibold"
        >
          {isLoading ? (
            <div className="text-white/50">Loading...</div>
          ) : (
            `"${advice}"`
          )}
        </motion.h1>
        <Image
          width={500}
          height={500}
          src={`/pattern-divider-mobile.svg`}
          alt="divider-mobile"
          className="mb-8 md:hidden"
        />
        <Image
          width={1000}
          height={1000}
          src={`/pattern-divider-desktop.svg`}
          alt="divider-desktop"
          className="mb-8 hidden md:block"
        />
        <button
          onClick={() => {
            if (!isFetching) {
              refetch().catch((err) => console.log(err));
              slip ? setAdvice(slip) : "";
            }
          }}
          className={`${
            isFetching ? "bg-[#50ffa8]/60" : "bg-[#50ffa8]"
          } absolute bottom-[-2rem] rounded-full  p-5 duration-300 hover:shadow-[0_0_30px_0px_#50ffa8]`}
        >
          <Image
            width={24}
            height={24}
            src={`/icon-dice.svg`}
            alt="icon-dice"
            className={isFetching ? "animate-spin" : ""}
          />
        </button>
      </motion.div>
    </>
  );
}

const variantsAdvice = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hide: {
    opacity: 0,
    y: -30,
  },
};
const variantsId = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      ease: "easeOut",
      duration: 1,
    },
  },
  hide: {
    opacity: 0,
    x: -100,
  },
};
