import bcrypt from "bcrypt"
import userRepository from "repositories/userRepository"

export async function createUser(email:string, password:string) {
 
const hashedPassword = await bcrypt.hash(password, 12)
return userRepository.create(
    {email,password:hashedPassword}
)

}

const userService = {
    createUser
}

export default userService