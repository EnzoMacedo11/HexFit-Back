

import { userPost } from "controllers";
import { Router } from "express";

const userRouter = Router()

userRouter.post("/",userPost)

export {userRouter}