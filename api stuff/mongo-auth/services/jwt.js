import jwt from "jsonwebtoken";
import User from "../models/user";

// take necessary user data -> put into payload of JWT -> return tokens
export async function getTokens(user) {
    const authToken = jwt.sign(user, process.env.AUTH_TOKEN_SECRET, { expiresIn: '20m' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '12d' });
    return { authToken, refreshToken }
}

// takes old-refesh-token -> verify and extract `id` -> fetch user of that id -> generate new tokens -> return tokens
export async function updateTokens(oldRefreshToken) {
    try {
        const { id } = jwt.verify(oldRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        const { _id, username, email, type  } = await User.findById(id).exec();
        const {authToken, refreshToken} = await getTokens({ _id, username, email, type })
        return {authToken, refreshToken};
    } catch (error) {
        // in case, refresh-token is not valid
        return false;
    }
}
