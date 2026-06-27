import { prisma } from "../lib/prisma";
import { createUser, findUser } from "../repositories/user.repository";
import bcrypt from "bcrypt";

const registerService = async (name: string, email: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser(name, email, hashedPassword);

    return user;
}

