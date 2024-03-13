
const Apartment = require('../../models/apartment')
// const City = require('../../models/city')
 const User = require('../../models/user')


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
         console.log(req.body);
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
                 characteristics,
                 owner : '60f3e3e3e3e3e3e3e3e3e3e3',
             });
             await newApartment.save();
             if (!newApartment) {
                 return res.status(400).json({ error: 'Apartment not created.' });
             }else{
                 res.status(201).json({ message: 'Apartment created successfully.',
                                        apartment: newApartment});

             }
         } catch (error) {
             console.error(error);
             res.status(500).json({ error: error.message });
         }
     }

     async getApartments(req, res) {
         try {
             const apartments = await Apartment.find();
             console.log(apartments)
             res.status(200).json(apartments);
         } catch (error) {
             console.error(error);
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
         const { name, image, city, address, price, description, numberOfPersons, space, characteristics, owner } = req.body;
         try {
             const apartment = await Apartment.findByIdAndUpdate(id, {
                 name,
                 image,
                 city,
                 address,
                 price,
                 description,
                 numberOfPersons,
                 space,
                 characteristics,
                 owner
             });
             if (!apartment) {
                 return res.status(404).json({ error: 'Apartment not found.' });
             }
             res.status(200).json({ message: 'Apartment updated successfully.' });
            }
            catch (error) {
                console.error(error);
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
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        }
    }

    const apartmentController = new ApartmentController();
    module.exports = apartmentController;