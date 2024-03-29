import { userSchema } from "../schema/userSchema.js";
import {users} from "../../db/userdata.js";

export const validateUser= (req,res,next)=>{
    const user=req.body;
    const {error} =userSchema.validate(user);
    if(error){
        res.status(400).json({message: error.details[0].message});
        return;
    }
    user.isDeleted=false;
    const index=users.findIndex(u => u.id===user.id);
    if(users.findIndex(u => u.id===user.id) !==-1){
        res.status(400).json({message: "User already exists"});
        return;
    }
    next();
}