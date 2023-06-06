import express from "express";
import cors from "cors"
import { userRouter } from "./routers";




const port = process.env.PORT || 4001
const app = express()

app.use(cors());
app.use(express.json())
app.use("/user", userRouter)

app.listen(port, ()=>{console.log(`Server is listening on port:${port}.`)})
