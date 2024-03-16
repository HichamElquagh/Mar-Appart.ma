
const TokenGenerator = require("../services/TokenGenerator");





const authenticationMiddleware = async (req, res, next) => {

    console.log("bbbb");
    console.log(req);
    // console.log(req.signedCookies);
    const accessToken = req.cookies.accessToken;
    // console.log(req.signedCookies);
    try {
        if (accessToken) {
            // console.log(accessToken);
            const payload = TokenGenerator.verifyToken(accessToken);
            console.log(payload);
            req.user = payload;
            return next();
        }else{
            return res.status(401).json({ error: 'Invalid credentials.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }


    //     if (!refreshToken) {
    //         const error = new UnauthenticatedErrorClass(
    //             "Not authorized to access"
    //         );
    //         return res.status(error.status).json({ message: error.message });
    //     }
    //     const payload = TokenGenerator.verifyToken(refreshToken);
    //     const existingToken = await Token.findOne({
    //         user: payload.user.userId,
    //         refreshToken: payload.refreshToken,
    //     });
    //     if (!existingToken || !existingToken.isValid) {
    //         throw new UnauthenticatedErrorClass("Authentication failed");
    //     }
    //     attachCookieToResponse({
    //         res,
    //         user: payload.user,
    //         refreshToken: existingToken.refreshToken,
    //     });
    //     req.user = payload.user;
    //     next();
    // } catch (e) {
    //     console.log(e);
    // }
};

module.exports = authenticationMiddleware;