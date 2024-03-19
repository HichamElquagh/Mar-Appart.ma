



const reservationMiddleware = (req, res, next) => {
    const { checkIn, checkOut} = req.body;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() - 1);


    if (checkInDate <= currentDate || checkOutDate < currentDate) {
        return res.status(400).json({ error: 'Invalid date' });
    }
    if (checkInDate >= checkOutDate) {
        return res.status(400).json({ error: 'Invalid date ' });
    }



    next();
}

module.exports = reservationMiddleware;
