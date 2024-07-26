"use server"

import { connectToDB } from "../database"
import User from "../database/models/user.model"

export const createUser = async (user) => {
    try {
        await connectToDB()

        const newUser = await User.create(user)

        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error);
    }
}