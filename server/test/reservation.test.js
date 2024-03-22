// Import the necessary modules and functions
const Apartment = require('../models/apartment'); // Make sure the path to your Apartment model is correct
const User = require('../models/user'); // Make sure the path to your User model is correct
const Reservation = require('../models/reservation'); // Make sure the path to your Reservation model is correct
const { bookApartment } = require('../controllers/reservation/reservation.controller'); // Make sure the path to your reservation controller is correct

// Mock the necessary modules and functions
jest.mock('../../models/apartment');
jest.mock('../../models/user');
jest.mock('../../models/reservation');

describe('bookApartment', () => {
  let req, res;

  beforeEach(() => {
    // Set up the request and response objects
    req = {
      body: {
        checkIn: '2022-01-01',
        checkOut: '2022-01-10',
        apartmentId: 'testApartmentId',
      },
      user: {
        id: 'testUserId',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should book an apartment', async () => {
    // Set up the mocks
    Apartment.findById.mockResolvedValue({ _id: req.body.apartmentId, price: 100 });
    User.findById.mockResolvedValue({ _id: req.user.id });
    Reservation.find.mockResolvedValue([]);
    const newBooking = { save: jest.fn().mockResolvedValue({}) };
    Reservation.mockReturnValue(newBooking);

    // Call the function
    await bookApartment(req, res);

    // Check that the mocks were called with the correct arguments
    expect(Apartment.findById).toHaveBeenCalledWith(req.body.apartmentId);
    expect(User.findById).toHaveBeenCalledWith(req.user.id);
    expect(Reservation.find).toHaveBeenCalledWith({ apartment: req.body.apartmentId, checkOut: { $gte: new Date() } });
    expect(newBooking.save).toHaveBeenCalled();

    // Check that the response is correct
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Apartment booked successfully.' });
  });

  // Add more tests for the other scenarios...
});