import User from "../../../models/user";
import connectDB from "../../../middlewares/db";
import {makePassword} from "../../../services/bcrypt";

async function handler(req, res) {
    const {
        body,
        method
    } = req;

    if(method === "POST") {
        try {
            // verify body content
            if (!(body.username && body.password && body.email))
                throw {message: "Provide all fields."}
            // generate salt and hash using bcrypt
            const pwd = await makePassword(body.password);
            if (pwd) {
                const { hash, salt } = pwd;
                // save to db
                const user = new User({ username: body.username, email: body.email, password: body.password, hash, salt, type: "employer"});
                res.status(201).json({ success: true, user: await user.save() });
            }
            else throw { message: "problem with password, try again!" }
        } catch (error) {
            if (error.code === 11000)   //  duplicate key error
                res.status(500).json({ success: false, error: `field ${JSON.stringify(error.keyValue)} is already registered, try different one` });
            else
                res.status(500).json({ success: false, error: error.message });
        }
    }
    else res.status(405).send();
}

export default connectDB(handler);