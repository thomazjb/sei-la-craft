import NextAuth from 'next-auth'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials";
let userAccount = null;

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const confirmPasswordHash = (plainPassword, hashedPassword) => {
    return new Promise(resolve => {
        bcrypt.compare(plainPassword, hashedPassword, function(err, res) {
            resolve(res);
        });
    })
}

const configuration = {
    cookie: {
        secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    },
    session: {
        jwt: true,
        //strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, 
        updateAge: 24 * 60 * 60, 
          
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try
                {
                    const user = await prisma.users.findFirst({
                        where: {
                            username: credentials.username
                        }
                    });
                   // console.log(user);
                    if (user !== null)
                    {
                        //Compare the hash
                        const res = await confirmPasswordHash(credentials.password, user.password);
                        if (res === true)
                        {
                            userAccount = {
                                userId: user.userId,
                                name: user.name,
                                username: user.username,
                                email: user.email,
                                isActive: user.isActive
                            };
                            console.log(userAccount);
                            return userAccount;
                        }
                        else
                        {
                            console.log("Hash not matched logging in");
                            return null;
                        }
                    }
                    else {
                        return null;
                    }
                }
                catch (err)
                {
                    console.log("Authorize error:", err);
                }

            }
        }),
    ],
    secret: 'bk3QTjo5edGByvogjqRSldyPJ568lhk1pfiniS4y56I=',
    callbacks: {
        async signIn(user, account, profile) {
            try
            {
                //the user object is wrapped in another user object so extract it
                user = user.user;
                console.log("Sign in callback", user);
                console.log("User id: ", user.userId)
                if (typeof user.userId !== typeof undefined)
                {

                    if (user.isActive === '1')
                    {
                        console.log("User is active");
                        return user;
                    }
                    else
                    {
                        console.log("User is not active")
                        return false;
                    }
                }
                else
                {
                    console.log("User id was undefined")
                    return false;
                }
            }
            catch (err)
            {
                console.error("Signin callback error:", err);
            }

        },
        async register(name, username, email, password) {
            try
            {
                await prisma.users.create({
                    data: {
                        name: name,
                        username: username,
                        email: email,
                        password: password
                    }
                })
                return true;
            }
            catch (err)
            {
                console.error("Failed to register user. Error", err);
                return false;
            }

        },
        async session(session, token) {
            if (userAccount !== null)
            {
                //session.user = userAccount;
                session.user = {
                    userId: userAccount.userId,
                    name: userAccount.name,
                    username: userAccount.username,
                    email: userAccount.email
                }

            }
            else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined
                || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined)))
            {
                session.user = token.user;
            }
            else if (typeof token !== typeof undefined)
            {
                session.token = token;
            }
            return session;
        },
        async jwt(token, account, profile, isNewUser) {
            console.log("JWT callback. Got User: ", account);
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
              }
              return token
        }
    }
}
export default (req, res) => NextAuth(req, res, configuration)
