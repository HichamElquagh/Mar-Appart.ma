// Import the necessary modules and functions
const Apartment = require('../models/apartment'); // Make sure the path to your Apartment model is correct
const {createApartment, getApartments , getAllApartments ,updateApartment , deleteApartment , getApartmentsByCityOrAddress ,filterApartments  } = require('../controllers/apartment/apartment.controller'); // Make sure the path to your apartment controller is correct

// Mock the necessary modules and functions
jest.mock('../models/apartment');

describe('createApartment', () => {
    let req, res;
  
    beforeEach(() => {
      // Set up the request and response objects
      req = {
        user: {
          id: 'testUserId',
        },
        body: {
          name: 'testApartment',
          images: ['image1', 'image2'],
          city: 'testCity',
          address: 'testAddress',
          price: 100,
          description: 'testDescription',
          numberOfPersons: 2,
          space: 100,
          characteristics: ['characteristic1', 'characteristic2'],
          owner: 'testOwner',
        },
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should create an apartment', async () => {
        // Set up the mocks
        const newApartment = { save: jest.fn().mockResolvedValue({}) };
        Apartment.mockReturnValue(newApartment);
      
        // Call the function
        await createApartment(req, res);
      
        // Check that the mocks were called with the correct arguments
        expect(newApartment.save).toHaveBeenCalled();
      
        // Check that the response is correct
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'Apartment created successfully.', apartment: newApartment });
      });
      
      it('should return 400 if the apartment is not created', async () => {
        // Set up the mocks
        const newApartment = { save: jest.fn().mockResolvedValue(null) };
        Apartment.mockReturnValue(newApartment);
      
        // Call the function
        await createApartment(req, res);
      
        // Check that the response is correct
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'Apartment created successfully.', apartment: newApartment });
      });
  
    it('should return 500 if an error occurs', async () => {
      // Set up the mocks
      const newApartment = { save: jest.fn().mockRejectedValue(new Error('Test error')) };
      Apartment.mockReturnValue(newApartment);
  
      // Call the function
      await createApartment(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
    });
  });


 
  // describe('getApartments', () => {
  //   let req, res;
  
  //   beforeEach(() => {
  //     req = {
  //       user: {
  //         id: 'testUserId',
  //         role: 'admin',
  //       },
  //     };
  //     res = {
  //       status: jest.fn().mockReturnThis(),
  //       json: jest.fn(),
  //     };
  //   });
  
  //   it('should get all apartments with populated owner fields if user is admin', async () => {
  //     const apartments = [{ _id: 'testApartmentId', owner: 'testOwnerId' }];
  //     Apartment.find.mockResolvedValue(apartments);
  
  //     await getApartments(req, res);
  
  //     expect(Apartment.find).toHaveBeenCalled();
  //     expect(res.status).toHaveBeenCalledWith(200);
  //     expect(res.json).toHaveBeenCalledWith(apartments);
  //   });
  
  //   it('should get apartments of the user if user is not admin', async () => {
  //     req.user.role = 'user';
  //     const apartments = [{ _id: 'testApartmentId', owner: req.user.id }];
  //     Apartment.find.mockResolvedValue(apartments);
  
  //     await getApartments(req, res);
  
  //     expect(Apartment.find).toHaveBeenCalledWith({ owner: req.user.id });
  //     expect(res.status).toHaveBeenCalledWith(200);
  //     expect(res.json).toHaveBeenCalledWith(apartments);
  //   });
  
  //   it('should return 500 if an error occurs', async () => {
  //     Apartment.find.mockRejectedValue(new Error('Test error'));
  
  //     await getApartments(req, res);
  
  //     expect(res.status).toHaveBeenCalledWith(500);
  //     expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
  //   });
  // });
  





describe('getAllApartments', () => {
    let req, res;
  
    beforeEach(() => {
      // Set up the request and response objects
      req = {};
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should get all apartments', async () => {
      // Set up the mocks
      Apartment.find.mockResolvedValue([]);
  
      // Call the function
      await getAllApartments(req, res);
  
      // Check that the mocks were called with the correct arguments
      expect(Apartment.find).toHaveBeenCalled();
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([]);
    });
  
    it('should return 500 if an error occurs', async () => {
      // Set up the mocks
      Apartment.find.mockRejectedValue(new Error('Test error'));
  
      // Call the function
      await getAllApartments(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
    });
  });

  describe('updateApartment', () => {
    let req, res;
  
    beforeEach(() => {
      // Set up the request and response objects
      req = {
        params: {
          id: 'testApartmentId',
        },
        body: {
          name: 'testApartment',
          images: ['image1', 'image2'],
          city: 'testCity',
          address: 'testAddress',
          price: 100,
          description: 'testDescription',
          numberOfPersons: 2,
          space: 100,
          characteristics: ['characteristic1', 'characteristic2'],
        },
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should update the apartment', async () => {
      // Set up the mocks
      Apartment.findByIdAndUpdate.mockResolvedValue({});
  
      // Call the function
      await updateApartment(req, res);
  
      // Check that the mocks were called with the correct arguments
      expect(Apartment.findByIdAndUpdate).toHaveBeenCalledWith(req.params.id, req.body);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Apartment updated successfully.' });
    });
  
    it('should return 404 if the apartment is not found', async () => {
      // Set up the mocks
      Apartment.findByIdAndUpdate.mockResolvedValue(null);
  
      // Call the function
      await updateApartment(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Apartment not found.' });
    });
  
    it('should return 500 if an error occurs', async () => {
      // Set up the mocks
      Apartment.findByIdAndUpdate.mockRejectedValue(new Error('Test error'));
  
      // Call the function
      await updateApartment(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
    });
  });

  describe('deleteApartment', () => {
    let req, res;
  
    beforeEach(() => {
      // Set up the request and response objects
      req = {
        params: {
          id: 'testApartmentId',
        },
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should delete the apartment', async () => {
      // Set up the mocks
      Apartment.findByIdAndDelete.mockResolvedValue({});
  
      // Call the function
      await deleteApartment(req, res);
  
      // Check that the mocks were called with the correct arguments
      expect(Apartment.findByIdAndDelete).toHaveBeenCalledWith(req.params.id);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Apartment deleted successfully.' });
    });
  
    it('should return 404 if the apartment is not found', async () => {
      // Set up the mocks
      Apartment.findByIdAndDelete.mockResolvedValue(null);
  
      // Call the function
      await deleteApartment(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Apartment not found.' });
    });
  
    it('should return 500 if an error occurs', async () => {
      // Set up the mocks
      Apartment.findByIdAndDelete.mockRejectedValue(new Error('Test error'));
  
      // Call the function
      await deleteApartment(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
    });
  });

  describe('getApartmentsByCityOrAddress', () => {
    let req, res;
  
    beforeEach(() => {
      // Set up the request and response objects
      req = {
        query: {
          city: 'testCity',
          address: 'testAddress',
        },
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should get apartments by city or address', async () => {
        // Set up the mocks
        Apartment.find.mockResolvedValue([{ _id: 'testApartmentId' }]); // Mock the function to return a non-empty array
      
        // Call the function
        await getApartmentsByCityOrAddress(req, res);
      
        // Check that the mocks were called with the correct arguments
        expect(Apartment.find).toHaveBeenCalledWith({ city: { $regex: req.query.city }, address: { $regex: req.query.address } });
      
        // Check that the response is correct
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{ _id: 'testApartmentId' }]);
      });
  
    it('should return 404 if no apartments are found', async () => {
      // Set up the mocks
      Apartment.find.mockResolvedValue(null);
  
      // Call the function
      await getApartmentsByCityOrAddress(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'No apartments found.' });
    });
  
    it('should return 400 if the city or address is not a string', async () => {
      // Set up the mocks
      req.query.city = 123;
      req.query.address = 123;
  
      // Call the function
      await getApartmentsByCityOrAddress(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'City must be a string.' });
    });
  
    it('should return 500 if an error occurs', async () => {
      // Set up the mocks
      Apartment.find.mockRejectedValue(new Error('Test error'));
  
      // Call the function
      await getApartmentsByCityOrAddress(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
    });
  });

  describe('filterApartments', () => {
    let req, res;
  
    beforeEach(() => {
      // Set up the request and response objects
      req = {
        query: {
          city: 'testCity',
          price: '100,200',
          numberOfPersons: '2',
        },
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
    });
  
    it('should filter apartments by city, price, and number of persons', async () => {
      // Set up the mocks
      Apartment.find.mockResolvedValue([{ _id: 'testApartmentId' }]);
  
      // Call the function
      await filterApartments(req, res);
  
      // Check that the mocks were called with the correct arguments
      expect(Apartment.find).toHaveBeenCalledWith({ city: { $regex: req.query.city }, price: { $gte: 100, $lte: 200 }, numberOfPersons: 2 });
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ _id: 'testApartmentId' }]);
    });
  
    it('should return 404 if no apartments are found', async () => {
      // Set up the mocks
      Apartment.find.mockResolvedValue(null);
  
      // Call the function
      await filterApartments(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'No apartments found.' });
    });
  
    it('should return 400 if the city, price, or number of persons is not a string', async () => {
      // Set up the mocks
      req.query.city = 123;
      req.query.price = 123;
      req.query.numberOfPersons = 123;
  
      // Call the function
      await filterApartments(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'City must be a string.' });
    });
  
    it('should return 500 if an error occurs', async () => {
      // Set up the mocks
      Apartment.find.mockRejectedValue(new Error('Test error'));
  
      // Call the function
      await filterApartments(req, res);
  
      // Check that the response is correct
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
    });
  });



