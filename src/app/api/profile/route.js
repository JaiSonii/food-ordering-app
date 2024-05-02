import mongoose from "mongoose"
import { getServerSession } from "next-auth";
import {authOptions} from '@/app/api/auth/[...nextauth]/route'
import { User } from "@/app/models/Users";

export async function PUT(req){
    await mongoose.connect(process.env.MONGO_URI)
    const data = await req.json();
   const session = await getServerSession(authOptions) 
   const email = session.user.email

   if ('name' in data){
    await User.updateOne({email}, {name : data.name})
   }
   console.log(session)
   return Response.json(true)
}