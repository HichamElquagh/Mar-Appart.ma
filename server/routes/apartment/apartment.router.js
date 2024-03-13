
const express = require('express');
const path = require('path');
const apartmentController = require('../../controllers/apartment/apartment.controller');
const apartmentRouter = express.Router();

apartmentRouter.get('/', apartmentController.getApartments);
apartmentRouter.get('/:id', apartmentController.getApartment);
apartmentRouter.post('/',  apartmentController.createApartment);
apartmentRouter.patch('/:id', apartmentController.updateApartment);
apartmentRouter.delete('/:id', apartmentController.deleteApartment);

module.exports = apartmentRouter; // Export the router
