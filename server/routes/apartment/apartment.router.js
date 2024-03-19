
const express = require('express');
const path = require('path');
const apartmentController = require('../../controllers/apartment/apartment.controller');
const apartmentRouter = express.Router();
const authenticationMiddleware = require('../../middlewares/authMiddleware');
const reservationMiddleware = require('../../middlewares/reservationMiddleware');

apartmentRouter.get('/', authenticationMiddleware, apartmentController.getApartments);
apartmentRouter.get('/search', apartmentController.getApartmentsByCityOrAddress);
apartmentRouter.get('/filter', apartmentController.filterApartments);
apartmentRouter.get('/all', apartmentController.getAllApartments);
apartmentRouter.post('/', authenticationMiddleware,  apartmentController.createApartment);
apartmentRouter.patch('/:id', apartmentController.updateApartment);
apartmentRouter.delete('/:id', apartmentController.deleteApartment);
apartmentRouter.get('/:id', apartmentController.getApartment);
apartmentRouter.post('/book', reservationMiddleware , authenticationMiddleware, apartmentController.bookApartment);
module.exports = apartmentRouter; // Export the router
