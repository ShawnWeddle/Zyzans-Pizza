/* eslint-disable */
import type { GetServerSidePropsContext } from "next";
import { NextApiRequest, NextApiResponse } from 'next';
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../env.mjs";
import { prisma } from "./db";
import { compare } from "bcrypt";
import type { User } from "@prisma/client";

/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session` object and keep type
 * safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks,
 * etc.
 *
 * @see https://next-auth.js.org/configuration/options
 **/
export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({token, user}){
      if(user){
        token.user = user;
      }
      console.log(token, user);
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = token.user as User;
        // session.user.role = user.role; <-- put other properties on the session here
      }
      console.log(session, token);
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "username", type: "text"},
        password: { label: "password", type: "password"}
      },
      async authorize(credentials, req){
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username
          }
        });
        if(!user){
          return null;
        }

        const passwordValid = await compare(credentials?.password as string, user.password);
        if(!passwordValid){
          return null;
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  }
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
