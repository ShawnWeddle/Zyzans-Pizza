import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  getall: publicProcedure
  .query(({ctx}) => {
    return ctx.prisma.post.findMany();
  }),
  
  createPost: protectedProcedure
  .input(z.object({
    location: z.number(),
    username: z.string(),
    message: z.string()
  }))
  .mutation(({input, ctx}) => {
    return ctx.prisma.post.create({
      data: {
        user: {
          connect: {
            id: ctx.session.user.id
          }
        },
        location: input.location,
        username: input.username,
        message: input.message
      }
    })
  }),

  updatePost: protectedProcedure
  .input(z.object({
    location: z.number(),
    username: z.string(),
    message: z.string()
  }))
  .mutation(({input, ctx}) => {
    console.log(ctx.session.user.id);
    return ctx.prisma.post.update({
      where: {
        userId: ctx.session.user.id
      },
      data: {
        user: {
          connect: {
            id: ctx.session.user.id
          }
        },
        location: input.location,
        username: input.username,
        message: input.message
      }
    })
  }),

  deletePost: protectedProcedure
  .mutation(({ctx}) => {
    return ctx.prisma.post.delete({
      where: {
        userId: ctx.session.user.id
      },
      
    })
  }),
}
);