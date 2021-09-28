import jwt from "jsonwebtoken";

const isAuthenticated = connectDB => handler => async (req, res) => {
    try {
        if (!req.headers.authorization) throw {message: "Authentication header not present"}
        if (!(req.headers.authorization.split(' ')[0] === "Bearer")) throw {message: "bearer token not available"}
        const token = req.headers.authorization.split(' ')[1];
        const user = jwt.verify(token, process.env.AUTH_TOKEN_SECRET);
        if (user) {
            const { _id, username, email, type } = user;
            req.user = { _id, username, email, type }
            return connectDB(handler(req, res));
        }
        else throw {message: "invalid token"}
    } catch (error) {
        return res.status(401).json({ success: false, error: error.message });
    }
}

export default isAuthenticated;