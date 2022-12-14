import NextAuth from 'next-auth'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials";
let userAccount = null;

const prisma = new PrismaClient();

const bcrypt = require('bcryptjs');

const confirmPasswordHash = (plainPassword, hashedPassword) => {
    return new Promise(resolve => {
        bcrypt.compare(plainPassword, hashedPassword, function(err, res) {
            resolve(res);
        });
    })
}

const configuration = {
    pages: {
        signIn: '/login',
        newUser: '/register'
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
        secret: process.env.NEXT_PUBLIC_SECRET,
    }
}
export default (req, res) => NextAuth(req, res, configuration)
