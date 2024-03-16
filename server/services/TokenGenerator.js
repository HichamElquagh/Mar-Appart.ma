const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

class TokenGenerator {


    generateAccessToken(payload) {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "48h"});
    }

    generateRefreshToken(payload) {
        return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "1d"});
    }

    verifyToken(token) {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    }
}

module.exports = new TokenGenerator();