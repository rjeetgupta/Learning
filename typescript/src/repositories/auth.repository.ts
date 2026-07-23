import { User } from "../models/user.model";

class AuthRepository { 
    async create(user: User) { 
        return User.create(user);
    }

    async findByEmail(email: string) { 
        return User.findOne({ email });
    }

    async findById(id: string) { 
        return User.findById(id);
    }

    async delete(id: string) { 
        return User.findByIdAndDelete(id)
    }
}

export const authRepository = new AuthRepository();