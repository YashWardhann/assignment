import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    // Get the token from the authorization header 
    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ')[1];

    // Check if bearer token exists
    if (bearerToken == null) return res.status(401).json({ status: 401, error: "Token not set" });

    // Verify the token the user sent 
    jwt.verify(bearerToken, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ status: 403, error: "Forbidden" });
        
        // Set the user information        
        req.user = user; 
        req.token = bearerToken;
        
        return next();
    });
}