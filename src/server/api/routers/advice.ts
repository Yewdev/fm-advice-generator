import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Advice } from "~/types";

export const adviceRouter = createTRPCRouter({
  get: publicProcedure.query(async () => {
    const { slip }: Advice = await fetch(
      "https://api.adviceslip.com/advice"
    ).then((res) => res.json());
    return {
      id: slip.id,
      advice: slip.advice,
    };
  }),
});
