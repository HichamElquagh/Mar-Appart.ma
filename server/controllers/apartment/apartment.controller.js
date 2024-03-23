
const Apartment = require('../../models/apartment')
// const City = require('../../models/city')
 const User = require('../../models/user')
 const Reservation = require('../../models/reservation')


// Create a new apartment

 class ApartmentController {
    //  constructor() {
    //      this.createApartment = this.createApartment.bind(this);
    //      this.getApartments = this.getApartments.bind(this);
    //      this.getApartment = this.getApartment.bind(this);
    //      this.updateApartment = this.updateApartment.bind(this);
    //      this.deleteApartment = this.deleteApartment.bind(this);
    //  }

     async createApartment(req, res) {
         const { name, images, city, address, price, description, numberOfPersons, space, characteristics, owner } = req.body;
         const user_id = req.user.id;
         try {
             const newApartment = new Apartment({
                 name,
                 images,
                 city,
                 address,
                 price,
                 description,
                 numberOfPersons,
                 space,
                 characteristics ,
                 owner : user_id ,
             });
             await newApartment.save();
             if (!newApartment) {
                 return res.status(400).json({ error: 'Apartment not created.' });
             }else{
                 res.status(201).json({ message: 'Apartment created successfully.',
                                        apartment: newApartment});

             }
         } catch (error) {
             res.status(500).json({ error: error.message });
         }
     }

     async getApartments(req, res) {
        if(req.user.role === 'admin'){
            try {
                const apartments = await Apartment.find();
                // console.log(apartments)
                res.status(200).json(apartments);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }else{
         try {
             const apartments = await Apartment.find(
                    { owner: req.user.id }

             );
             res.status(200).json(apartments);
         } catch (error) {
             res.status(500).json({ error: error.message });
         }
     }
    }

     async getAllApartments(req, res) {
            try {
                const apartments = await Apartment.find();
                res.status(200).json(apartments);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }


     async getApartment(req, res) {
         const { id } = req.params;
         try {
             const apartment = await Apartment.findById(id);
             if (!apartment) {
                 return res.status(404).json({ error: 'Apartment not found.' });
             }
             res.status(200).json(apartment);
         } catch (error) {
             console.error(error);
             res.status(500).json({ error: error.message });
         }
     }

     async updateApartment(req, res) {
         const { id } = req.params;
         const { name, images, city, address, price, description, numberOfPersons, space, characteristics} = req.body;
         console.log(req.body);
         try {
             const apartment = await Apartment.findByIdAndUpdate(id, {
                 name,
                 images,
                 city,
                 address,
                 price,
                 description,
                 numberOfPersons,
                 space,
                 characteristics,
             });
             if (!apartment) {
                 return res.status(404).json({ error: 'Apartment not found.' });
             }
             res.status(200).json({ message: 'Apartment updated successfully.' });
            }
            catch (error) {
                // console.error(error);
                res.status(500).json({ error: error.message });
            }
        }
        
        async deleteApartment(req, res) {
            const { id } = req.params;
            try {
                const apartment = await Apartment.findByIdAndDelete(id);
                if (!apartment) {
                    return res.status(404).json({ error: 'Apartment not found.' });
                }
                res.status(200).json({ message: 'Apartment deleted successfully.' });
            }
            catch (error) {
                // console.error(error);
                res.status(500).json({ error: error.message });
            }
        }

        async  getApartmentsByCityOrAddress(req, res) {
            const { address, city } = req.query;
            // console.log("City:", city);
            // console.log("Address:", address);
        
            try {
                let query = {};
                if (city) {
                    if (typeof city === "string") {
                        query.city = { $regex: city };
                    } else {
                        return res.status(400).json({ error: 'City must be a string.' });
                    }
                }
                if (address) {
                    if (typeof address === "string") {
                        query.address = { $regex: address };
                    } else {
                        return res.status(400).json({ error: 'Address must be a string.' });
                    }
                }
        
                const apartments = await Apartment.find(query);
        
                if (!apartments || apartments.length === 0) {
                    return res.status(404).json({ error: 'No apartments found.' });
                }
        
                res.status(200).json(apartments);
            } catch (error) {
                // console.error(error);
                res.status(500).json({ error: error.message });
            }
        }


        async filterApartments(req, res) {
            const {numberOfPersons, city,price, } = req.query;
            // console.log("City:", city);
            // console.log("Price:", price);
            // console.log("Number of persons:", numberOfPersons);        
            try {
                let query = {};
                if (city) {
                    if (typeof city === "string") {
                        query.city = { $regex: city };
                    } else {
                        return res.status(400).json({ error: 'City must be a string.' });
                    }
                }
               if (price) {
                    if (typeof price === "string") {
                      const [minPrice, maxPrice] = price.split(",").map(Number);
                      if (!isNaN(minPrice) && !isNaN(maxPrice)) {
                        query.price = { $gte: minPrice, $lte: maxPrice };
                      } else {
                        return res.status(400).json({ error: 'Invalid price format. Price must be in the format "min,max".' });
                      }
                    } else {
                      return res.status(400).json({ error: 'Price must be a string.' });
                    }
                  }
              
                if (numberOfPersons) {
                    if (typeof numberOfPersons === "string") {
                        const Persons = Number(numberOfPersons);
                        // console.log("Persons:", typeof Persons);
                        query.numberOfPersons =  Persons ;
                    } else {
                        return res.status(400).json({ error: 'Number of persons must be a string.' });
                    }
                }

        
                const apartments = await Apartment.find(query);
        
                if (!apartments || apartments.length === 0) {
                    return res.status(404).json({ error: 'No apartments found.' });
                }
        
                res.status(200).json(apartments);
            } catch (error) {
                // console.error(error);
                res.status(500).json({ error: error.message });
            }
        }

      



        

        
    }


    const apartmentController = new ApartmentController();
    module.exports = apartmentController;