import User from "../models/User.js"

export default {
    async register(userData) {
        const createdUser = await User.create(userData);

        return {
            _id: createdUser.id,
            email: createdUser.email,
            accessToken: ''
        };
    }
}