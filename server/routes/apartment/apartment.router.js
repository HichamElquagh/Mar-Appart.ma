
const express = require('express');
const path = require('path');
const apartmentController = require('../../controllers/apartment/apartment.controller');
const apartmentRouter = express.Router();
const authenticationMiddleware = require('../../middlewares/authMiddleware');

apartmentRouter.get('/', authenticationMiddleware, apartmentController.getApartments);
apartmentRouter.get('/all', apartmentController.getAllApartments);
apartmentRouter.get('/:id', apartmentController.getApartment);
apartmentRouter.post('/', authenticationMiddleware,  apartmentController.createApartment);
apartmentRouter.patch('/:id', apartmentController.updateApartment);
apartmentRouter.delete('/:id', apartmentController.deleteApartment);
apartmentRouter.get('/search/:address/:city', apartmentController.getApartmentsByCityOrAddress);

module.exports = apartmentRouter; // Export the router
