const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const dotenv = require('dotenv').config();
const TokenGenerator = require('../../services/TokenGenerator');


class AuthController {
    
    async registerUser(req, res) {
        const { username, email, phone , password } = req.body;

        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ error: 'Username already exists.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                username,
                email,
                phone,
                password: hashedPassword,
            });
            const payload = {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                phone: newUser.phone,
                role: newUser.role
            };
            console.log(payload);

            await newUser.save();
            const accessToken = TokenGenerator.generateAccessToken(payload);
            // const refreshToken = TokenGenerator.generateRefreshToken(payload);

             
            res
            .cookie('accessToken', accessToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", // Ensures the cookie is only sent over HTTPS in production     
        })
            .status(201).json({ message: 'User registered successfully.',
             accessToken: accessToken,
             newUser

            });
            
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async loginUser(req, res) {
      const { email, password } = req.body;
  
      try {
          const user = await User.findOne({ email });
          if (!user) {
              return res.status(401).json({ error: 'email not found' });
          }
  
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
              return res.status(401).json({ error: 'Password not match ' });
          }
          const payload = {
              id: user._id,
              username: user.username,
              email: user.email,
              phone: user.phone,
              role: user.role
          };
          const accessToken = TokenGenerator.generateAccessToken(payload);
          res.cookie('accessToken', accessToken, {
            httpOnly: true,
            sameSite: "lax",
    });
            return res.status(200).json({ message: 'Login successful.',
            user
        });
          
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: error.message });
      }
  }

    async logoutUser(req, res) {
        console.log('logout');
        res.clearCookie('accessToken', ).status(200).json({ message: 'Logout successful.' });
    }

}

module.exports = new AuthController();