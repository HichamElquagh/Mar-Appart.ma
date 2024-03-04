const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const dotenv = require('dotenv').config();
const TokenGenerator = require('../../services/TokenGenerator');


class AuthController {
    constructor() {
        this.tokenGenerator = new TokenGenerator();
        this.registerUser = this.registerUser.bind(this);
        this.loginUser = this.loginUser.bind(this);

    }

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
                phone: newUser.phone
            };

            await newUser.save();
            const accessToken = this.tokenGenerator.generateAccessToken(payload);
            const refreshToken = this.tokenGenerator.generateRefreshToken(payload);

             
            res.status(201).json({ message: 'User registered successfully.',
             accessToken: accessToken,
             refreshToken: refreshToken
            });
            r
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
              return res.status(401).json({ error: 'Invalid credentials.' });
          }
  
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
              return res.status(401).json({ error: 'Invalid credentials.' });
          }
          const payload = {
              id: user._id,
              username: user.username,
              email: user.email,
              phone: user.phone
          };
          const accessToken = this.tokenGenerator.generateAccessToken(payload);
          const refreshToken = this.tokenGenerator.generateRefreshToken(payload);
          res
          .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
          .header('Authorization', accessToken)
          .status(200)
          .json({ message: 'Login successful.', user });
          
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: error.message });
      }
  }
}

module.exports = new AuthController();