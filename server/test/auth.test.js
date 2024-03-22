// Import the necessary modules and functions
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Make sure the path to your User model is correct
const TokenGenerator = require('../services/TokenGenerator'); // Make sure the path to your TokenGenerator is correct
const { registerUser } = require('../controllers/auth/auth.controller'); // Make sure the path to your auth controller is correct
// Mock the necessary modules and functions
jest.mock('../../models/user');
jest.mock('bcryptjs');
jest.mock('../../services/TokenGenerator');


describe('registerUser', () => {
  let req, res;

  beforeEach(() => {
    // Set up the request and response objects
    req = {
      body: {
        username: 'testUsername',
        email: 'testEmail',
        phone: 'testPhone',
        password: 'testPassword',
      },
    };
    res = {
      cookie: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });
  
  it('should register a user', async () => {
    // Check that req.body is defined and includes username, email, and phone
    expect(req.body).toBeDefined();
    expect(req.body.username).toBe('testUsername');
    expect(req.body.email).toBe('testEmail');
    expect(req.body.phone).toBe('testPhone');
  
    // Set up the mocks
    User.findOne.mockResolvedValue(null);
    bcrypt.hash.mockResolvedValue('hashedPassword');
    const newUser = { _id: 'testUserId', save: jest.fn().mockResolvedValue({}) };
    User.mockReturnValue(newUser);
    TokenGenerator.generateAccessToken.mockReturnValue('accessToken');

    // Call the function
    await registerUser(req, res);

    // Check that the mocks were called with the correct arguments
    expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
    expect(bcrypt.hash).toHaveBeenCalledWith(req.body.password, 10);
    expect(newUser.save).toHaveBeenCalled();
    expect(TokenGenerator.generateAccessToken).toHaveBeenCalledWith({
      id: newUser._id,
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      role: newUser.role,
    });

    // Check that the response is correct
    expect(res.cookie).toHaveBeenCalledWith('accessToken', 'accessToken', { httpOnly: true, secure: process.env.NODE_ENV === "production" });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully.', accessToken: 'accessToken', newUser });
  });

  it('should return 409 if the user already exists', async () => {
    // Set up the mocks
    User.findOne.mockResolvedValue({});

    // Call the function
    await registerUser(req, res);

    // Check that the response is correct
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({ error: 'Username already exists.' });
  });

  it('should return 500 if an error occurs', async () => {
    // Set up the mocks
    User.findOne.mockRejectedValue(new Error('Test error'));

    // Call the function
    await registerUser(req, res);

    // Check that the response is correct
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
  });
});

// describe('loginUser', () => {
//   let req, res;

//   beforeEach(() => {
//     // Set up the request and response objects
//     req = {
//       body: {
//         email: 'test@example.com',
//         password: 'password123',
//       },
//     };
//     res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//       cookie: jest.fn(),
//     };
//   });

//   it('should return 401 if user does not exist', async () => {
//     // Set up the mocks
//     User.findOne.mockResolvedValue(null);

//     // Call the function
//     await loginUser(req, res);

//     // Check that the response is correct
//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.json).toHaveBeenCalledWith({ error: 'email not found' });
//   });

//   it('should return 401 if password does not match', async () => {
//     // Set up the mocks
//     User.findOne.mockResolvedValue({ password: 'hashedpassword' });
//     bcrypt.compare.mockResolvedValue(false);

//     // Call the function
//     await loginUser(req, res);

//     // Check that the response is correct
//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Password not match ' });
//   });

//   it('should log in a user', async () => {
//     // Set up the mocks
//     const user = {
//       _id: 'userId',
//       username: 'testuser',
//       email: req.body.email,
//       phone: '1234567890',
//       password: 'hashedpassword',
//       role: 'user',
//     };
//     User.findOne.mockResolvedValue(user);
//     bcrypt.compare.mockResolvedValue(true);
//     TokenGenerator.generateAccessToken.mockReturnValue('accesstoken');

//     // Call the function
//     await loginUser(req, res);

//     // Check that the mocks were called with the correct arguments
//     expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
//     expect(bcrypt.compare).toHaveBeenCalledWith(req.body.password, user.password);
//     expect(TokenGenerator.generateAccessToken).toHaveBeenCalledWith({
//       id: user._id,
//       username: user.username,
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//     });

//     // Check that the response is correct
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({
//       message: 'Login successful.',
//       user,
//     });
//   });

//   it('should return 500 if an error occurs', async () => {
//     // Set up the mocks
//     User.findOne.mockRejectedValue(new Error('Test error'));

//     // Call the function
//     await loginUser(req, res);

//     // Check that the response is correct
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
//   });
// });

// // Import the necessary modules and functions
// const { logoutUser } = require('../auth/auth.controller'); // Make sure the path to your auth controller is correct

// describe('logoutUser', () => {
//   let req, res;

//   beforeEach(() => {
//     // Set up the request and response objects
//     req = {};
//     res = {
//       clearCookie: jest.fn().mockReturnThis(),
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//   });

//   it('should log out a user', async () => {
//     // Call the function
//     await logoutUser(req, res);

//     // Check that the mocks were called with the correct arguments
//     expect(res.clearCookie).toHaveBeenCalledWith('accessToken');
//     expect(res.status).toHaveBeenCalledWith(200);

//     // Check that the response is correct
//     expect(res.json).toHaveBeenCalledWith({ message: 'Logout successful.' });
//   });
// });





