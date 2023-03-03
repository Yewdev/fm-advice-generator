import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const adviceRouter = createTRPCRouter({
  get: publicProcedure.query(async () => {
    const data = await (
      await fetch("https://api.adviceslip.com/advice")
    ).json();
    return {
      id: data.slip.id,
      advice: data.slip.advice,
    };
  }),
});
