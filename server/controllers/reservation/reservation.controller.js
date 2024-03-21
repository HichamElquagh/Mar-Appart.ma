const Apartment = require('../../models/apartment')
const User = require('../../models/user')
const Reservation = require('../../models/reservation')



class ReservationController {
    
      async bookApartment(req, res) {
            const { checkIn, checkOut , apartmentId } = req.body;
            const user_id = req.user.id;
            console.log("User id:", user_id);
            console.log("Apartment id:", apartmentId);
            console.log("Start date:", checkIn);
            console.log("End date:", checkOut);
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
        
            try {
                const apartment = await Apartment.findById(apartmentId);
                if (!apartment) {
                    return res.status(404).json({ error: 'Apartment not found.' });
                }

                const user = await User.findById(user_id);
                if (!user) {
                    return res.status(404).json({ error: 'User not found.' });
                }
                const currentDate = new Date();
                console.log("Current date:", currentDate);
                const reservations = await Reservation.find({ apartment: apartmentId,  checkOut: { $gte:currentDate  } });
                // console.log("Check:", typeof check);
                // console.log("Check:", check);
                // return 
                if(reservations){
                    // console.log("Check:", check);
                    // return
                    let reservationConflict = false;
                    let ckeckInBooked = null;
                    let ckeckOutBooked = null;

                    reservations.forEach((item) => {
                        if (
                          (checkInDate >= item.checkIn && checkInDate <= item.checkOut) ||
                          (checkOutDate >= item.checkIn && checkOutDate <= item.checkOut)
                        ) {
                          reservationConflict = true;
                            ckeckInBooked = item.checkIn.toISOString().slice(0, 10);;
                            ckeckOutBooked = item.checkOut.toISOString().slice(0, 10);;

                        }
                      });
                  
                      if (reservationConflict) {
                        return res
                          .status(400)
                          .json({ error: 'Apartment is already booked between' + ckeckInBooked + " and " + ckeckOutBooked + "please choose another date"});
                      }
                // return 
                    console.log("User:", user);
                    const booking = {
                        apartment: apartment._id,
                        user: user._id,
                        checkIn,
                        checkOut,
                        totalPrice: apartment.price,
                        status:"Reserved"
                    };
                    console.log("Booking:", booking);
                    const newBooking = new Reservation(booking);
                    await newBooking.save();
                    res.status(200).json({ message: 'Apartment booked successfully.' });
                }else{

                    console.log("User:", user);
                    const booking = {
                        apartment: apartment._id,
                        user: user._id,
                        checkIn,
                        checkOut,
                        totalPrice: apartment.price,
                        status:"Reserved"
                    };
                    console.log("Booking:", booking);
                    const newBooking = new Reservation(booking);
                    await newBooking.save();
                    res.status(200).json({ message: 'Apartment booked successfully.' });
                }

            

                // if(checkifBooked.status === "Reserved"){
                //     const currentDate = new Date();

                //     if (checkIn >= checkifBooked.checkIn && checkIn <= checkifBooked.checkOut) {
                //         return res.status(400).json({ error: 'Apartment is already booked.' });
                //     }

                //     if (checkOut >= checkifBooked.checkIn && checkOut <= checkifBooked.checkOut) {
                //         return res.status(400).json({ error: 'Apartment is already booked.' });
                //     }
                //     console.log("User:", user);
                // const booking = {
                //     apartment: apartment._id,
                //     user: user._id,
                //     checkIn,
                //     checkOut,
                //     totalPrice: apartment.price,
                //     status:"Reserved"
                // };
                // console.log("Booking:", booking);
                // const newBooking = new Reservation(booking);
                // await newBooking.save();
                // res.status(200).json({ message: 'Apartment booked successfully.' });
                    

                        

                    
            //     // }       
            //     console.log("User:", user);
            //     const booking = {
            //         apartment: apartment._id,
            //         user: user._id,
            //         checkIn,
            //         checkOut,
            //         totalPrice: apartment.price,
            //         status:"Reserved"
            //     };
            //     console.log("Booking:", booking);
            //     const newBooking = new Reservation(booking);
            //     await newBooking.save();
            //     res.status(200).json({ message: 'Apartment booked successfully.' });
            }
             catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        }

    async getReservations(req, res) {
        const user_id = req.user.id;
        if (req.user.role === 'admin') {
            try {
                const reservations = await Reservation.find().populate('apartment', 'name location price city').populate('user', 'username email phone image');
                res.status(200).json(reservations);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        } else {
            try {
                const myApartments = await Apartment.find({ owner: user_id });
                const myApartmentsIds = myApartments.map((apartment) => apartment._id);
                const myApartmentsReservation = await Reservation.find({
                    apartment: { $in: myApartmentsIds },
                 }).populate('User', 'name email phone').populate('Apartment', 'name location price city')
                 ;
                res.status(200).json(myApartmentsReservation);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        }
    }

    async getReservation(req, res) {
        const user_id = req.user.id;
        try {
            const reservation = await Reservation.find({ user: user_id }).populate('apartment', 'name location price city images');
            if (!reservation) {
                return res.status(404).json({ error: 'Reservation not found' });
            }
            res.status(200).json(reservation);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateReservation(req, res) {
        const { id } = req.params;
        const { checkIn, checkOut, totalPrice, status } = req.body;
        try {
            const reservation = await Reservation.findById(id);
            if (!reservation) {
                return res.status(404).json({ error: 'Reservation not found' });
            }
            reservation.checkIn = checkIn;
            reservation.checkOut = checkOut;
            reservation.totalPrice = totalPrice;
            reservation.status = status;
            await reservation.save();
            res.status(200).json({ message: 'Reservation updated successfully.',
                reservation
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }

    }

    async deleteReservation(req, res) {
        const { id } = req.params;
        try {
            const reservation = await Reservation.findByIdAndDelete(id);
            if (!reservation) {
                return res.status(404).json({ error: 'Reservation not found' });
            }
            res.status(200).json({ message: 'Reservation deleted successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ReservationController();