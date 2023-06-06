import { Request,Response } from "express";
import httpStatus from "http-status";
import userService from "services/userService";


export async  function userPost(req:Request,res:Response){
    const { email, password } = req.body;

    try{
        const user = await userService.createUser(email, password)
        return res.status(httpStatus.CREATED).json({
            id:user.id,
            email:user.email
        })
    }catch{

    }

}

const userController =[
    userPost
]

export  {userController}