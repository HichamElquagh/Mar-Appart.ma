const express = require('express');
const reservationController = require('../../controllers/reservation/reservation.controller');
const authenticationMiddleware = require('../../middlewares/authMiddleware');
const reservationMiddleware = require('../../middlewares/reservationMiddleware');
const reservationRouter = express.Router();

reservationRouter.post('/book', reservationMiddleware , authenticationMiddleware, reservationController.bookApartment);
reservationRouter.get('/', authenticationMiddleware, reservationController.getReservations);
reservationRouter.get('/myreservation', authenticationMiddleware, reservationController.getReservation);
reservationRouter.patch('/:id', reservationController.updateReservation);
reservationRouter.delete('/:id', reservationController.deleteReservation);

module.exports = reservationRouter; // Export the router