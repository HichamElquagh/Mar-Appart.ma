
const express = require('express');
const path = require('path');
const apartmentController = require('../../controllers/apartment/apartment.controller');
const apartmentRouter = express.Router();
const authenticationMiddleware = require('../../middlewares/authMiddleware');

apartmentRouter.get('/', authenticationMiddleware, apartmentController.getApartments);
apartmentRouter.get('/:id', apartmentController.getApartment);
apartmentRouter.post('/', authenticationMiddleware,  apartmentController.createApartment);
apartmentRouter.patch('/:id', apartmentController.updateApartment);
apartmentRouter.delete('/:id', apartmentController.deleteApartment);

module.exports = apartmentRouter; // Export the router
