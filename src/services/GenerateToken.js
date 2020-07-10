import jwt from "jsonwebtoken";

/*
 * Generates a json web token based on a 
 * given source string
 */

const generateToken = (source) => {
    const payload = {
        user_id: source
    };

    return jwt.sign(payload, process.env.TOKEN_SECRET);
}

export default generateToken;