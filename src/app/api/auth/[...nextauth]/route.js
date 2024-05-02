import mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import { User } from '@/app/models/Users'
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from '@/libs/MongoConnect'

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter : MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "email", type: "email", placeholder: "test@example.com" },
        password: { label: "password", type: "password" }
      },
      authorize: async (credentials, req) => {
        const { email, password } = credentials
        try {
          await mongoose.connect(process.env.MONGO_URI)
        } catch (err) {
          console.log(err)
        }
        const user = await User.findOne({ email })
        const hashPass = user.password;
        const isMatch = user && bcrypt.compareSync(password, hashPass)
        if (isMatch) {
          return user
        }
        return null
        // Return null if user data could not be retrieved

      }
    })
  ]

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }


