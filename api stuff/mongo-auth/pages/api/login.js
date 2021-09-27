import User from "../../models/user";
import connectDB from "../../middlewares/db";
import {comparePassword} from "../../services/bcrypt";
import {getTokens} from "../../services/jwt";

async function handler(req, res) {
    const {
        body,
        method
    } = req;

    if ( method === 'POST' ) {
        try {
            // verify body content
            if (!(body.password && body.email))
                throw {message: "Provide all fields"}
            // fetch User from DB
            const currentUser = await User.findOne({email: body.email});
            if (!currentUser)
                throw {message: "User not found"}
            // compare user provided password with DB's pwd hash using bcrypt
            const isValid = await comparePassword(body.password, currentUser.hash);
            if (isValid) {
                const { _id, username, email, type } = currentUser;
                const {authToken, refreshToken} = await getTokens({
                    _id, username, email, type
                });
                res.status(200).json({ success: true, authToken, refreshToken });
            }
            else throw { message: "wrong password" }
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
    else res.status(405).send();
}

export default connectDB(handler);