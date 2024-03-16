


const TokenGenerator = require('../services/TokenGenerator');





const adminPermissionMiddleware = (req, res, next) => {

    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
        return res.status(401).json({ error: 'Invalid credentials.' });
    }else{

        try {
            const payload = TokenGenerator.verifyToken(accessToken);
            req.user = payload;
            if(req.user.role === 'admin')
            {
                return next();
            }
            else{
                return res.status(403).json({ error: 'Unauthorized' });
            }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }

    // const { role } = req.user;
    // if (role !== 'admin') {
    //     return res.status(403).json({ error: 'Unauthorized' });
    // }
    // next();
}
}

module.exports = adminPermissionMiddleware;