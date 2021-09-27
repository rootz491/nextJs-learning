import { updateTokens } from "../../services/jwt";

/*
 *  takes refresh token and returns new auth and refresh token.
*/
export default async function handler(req, res) {
    const {
        method, 
        body
    } = req;

    if (method === 'POST') {
        console.log('refresh hit');
        try {
            if (!body.token) throw {message: "refresh token required"}
            const tokens = await updateTokens(body.token);
            if (tokens) {
                const {authToken, refreshToken} = tokens;
                return res.json({ success: true, authToken, refreshToken });
            }
            else throw {message: "Invaid refresh token"}
        } catch (error) {
            return res.status(401).json({success: false, error: error.message});
        }
    }
    else res.status(405).send();
}
