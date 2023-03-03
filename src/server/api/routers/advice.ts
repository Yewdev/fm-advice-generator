import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fetch from "isomorphic-unfetch";

const slipSchema = z.object({
  id: z.number(),
  advice: z.string(),
});
async function fetchSlip() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await response.json();
  return slipSchema.parse(slip);
}
export const adviceRouter = createTRPCRouter({
  get: publicProcedure.query(fetchSlip),
});
