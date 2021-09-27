import bcrypt from "bcrypt";

const saltRounds = 10;

export async function makePassword(password) {
    try {
        //  generate salt & hash then, return them
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return { salt, hash }
    } catch (error) {
        console.log(error);
        return {};
    }
}

export async function comparePassword(password, hash) {
    try {
        // compare password with hash (encrypted password)
        const result = await bcrypt.compare(password, hash);
        return result;
    } catch (error) {
        console.log(error);
        return false
    }
}