import { model, Schema, type InferSchemaType } from "mongoose";

const USER_ROLES = ["admin", "user"] as const;

// interface User {
//     name?: string;
//     email: string;
//     password: string;
//     role?: (typeof USER_ROLES)[number];
//     isVerified?: boolean;
//     refreshToken?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            enum: USER_ROLES,
            default: "user",
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true },
);

export type User = InferSchemaType<typeof userSchema>;

export const User = model("User", userSchema);
