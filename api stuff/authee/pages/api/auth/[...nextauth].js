import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    // config any number of authentication provider
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        // can add more providers here!
    ],
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,  //  30 days
        updateAge: 60 * 60  //  1 hour
    },
    jwt: {
        //  for signing (JWS)
        secret: process.env.JWT_SECRET
    }
});

/*
 * All request to `/api/auth/*` will automatically be handled by `NextAuth.js`
    - signIn
    - callback
    - signOut, etc...
*/
