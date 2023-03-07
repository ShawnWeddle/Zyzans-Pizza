import { z } from "zod";
import bcrypt from "bcrypt";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getByUsername: publicProcedure
  .input(z.object({ username: z.string() }))
  .query(({input, ctx}) => {
    return ctx.prisma.user.findUnique({
      where: {
        username: input.username
      }
    })
  }),

  create: publicProcedure
  .input(z.object({
    username: z.string(),
    password: z.string(),
    passwordConfirmation: z.string()
  }))
  .mutation(async ({input, ctx}) => {
    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(input.password, salt);

    return ctx.prisma.user.create({
      data: {
        username: input.username,
        password: hashedPassword
      }
    })
  })
}
);