import { Prisma,PrismaClient } from "@prisma/client"

let prisma = new PrismaClient()


export async function create(data:Prisma.UserUncheckedCreateInput) {
    return prisma.user.create({
        data,
    }
    

    )
    
    
}

const userRepository ={
    create
}

export default userRepository