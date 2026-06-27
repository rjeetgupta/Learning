import { prisma } from "../lib/prisma";

// Create new User
const createUser = (name: string, email: string, password: string) => {
    return prisma.user.create({
        data: {
            name,
            email,
            password,
        }
    });
}

// Find user with email
const findUser = (email: string) => {
    return prisma.user.findUnique({
        where: { email }
    });
}

export {
    createUser,
    findUser,
}