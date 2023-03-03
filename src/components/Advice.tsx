import { useState } from "react";
import { api } from "~/utils/api";
import Image from "next/image";

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
      <div className="relative mb-10 flex max-w-[26rem] flex-col items-center gap-8 rounded-2xl bg-[#313a49] px-6 py-8 selection:bg-[#50ffa8] selection:text-[#313a49] md:max-w-[34rem] md:px-10 md:py-14">
        <span className="select-none text-xs font-semibold tracking-[0.2em] text-[#50ffa8] md:tracking-[0.4em]">
          ADVICE #{id}
        </span>
        <h1 className="text-center text-2xl font-bold text-[#cfe3ea] md:text-3xl md:font-semibold ">
          {isLoading ? <div className="text-white/50">Loading...</div> : advice}
        </h1>
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
      </div>
    </>
  );
}
