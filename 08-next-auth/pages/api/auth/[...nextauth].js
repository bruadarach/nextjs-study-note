import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import { getToken } from "next-auth/jwt";
import { getToken } from "next-auth/jwt";

// 토큰을 가져오는 함수
const getTokenForUser = async () => {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  return token;
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise), // MongoDB 어댑터
  secret: process.env.JWT_SECRET, // JWT를 위한 비밀 키

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
