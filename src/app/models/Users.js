import {Schema, model, models} from "mongoose";
import bcrypt from 'bcrypt'


const userSchema = new Schema({
    name : {
        type : String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps: true})

userSchema.post('validate', async function(user){
    const nonHashedPass = user.password;
    const salt = bcrypt.genSaltSync(10)
    user.password = bcrypt.hashSync(nonHashedPass, salt)
})

export const User = models?.User || new model('User', userSchema)