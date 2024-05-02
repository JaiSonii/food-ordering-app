import mongoose from "mongoose";
import { User } from "../../models/Users";

export async function POST(req){
    const body = await req.json()
    mongoose.connect(process.env.MONGO_URI);
    const user = await User.create(body)
    return Response.json(user)
}