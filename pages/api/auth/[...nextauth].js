import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            }, 
            async authorize(credentials, req) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? process.env.NEXTAUTH_URL : process.env.NEXT_PUBLIC_VERCEL_URL}/api/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password
                    }),
                    headers: { "Content-Type": "application/json" }
                })

                const user = await res.json();

                if (res.status != 200) {
                    throw new Error(user.error);
                }
                if (res.ok && user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login',
    }
})