import { useState } from "react";
import { api } from "~/utils/api";

export default function Advice() {
  const [advice, setAdvice] = useState("Just do it");
  const { data, isLoading, isFetching, refetch } = api.advice.get.useQuery();
  function generateAdvice() {
    refetch();
    setAdvice(data?.advice);
  }
  return (
    <>
      {isFetching ? (
        <p className="text-2xl text-white">...</p>
      ) : (
        <p className="text-2xl text-white">{`" ${advice} "`}</p>
        // <p className="text-2xl text-white">{data?.advice}</p>
      )}
      <button
        onClick={() => generateAdvice()}
        className="rounded-lg border border-white px-4 py-2 text-white"
      >
        Generate
      </button>
    </>
  );
}
