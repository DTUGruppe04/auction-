// backend/middleware/authenticateToken.js
import jwt from 'jsonwebtoken';

const secret = "team04"; // Use a secure secret in production

export default function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}