import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DB_URL,
  // next-auth will automatically track session state in a database
  session: {
    // use jwt for session management, instead of database
    jwt: true,
  },
  jwt: {
    // use a secret to sign and encrypt the JWT
    secret: process.env.JWT_SECRET,
  },
};

export default NextAuth(authOptions);
