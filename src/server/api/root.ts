import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { userRouter } from "./routers/userRouter";
import { postRouter } from "./routers/postRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  userRouter: userRouter,
  postRouter: postRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
