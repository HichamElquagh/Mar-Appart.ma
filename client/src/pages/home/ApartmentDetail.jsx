import React , {useState , useEffect} from "react";
import room from "../../assets/images/room.jpg";
import HomeNav from "../../components/home/HomeNav";
import Footer from "../../components/home/Footer";
import { Link, useLocation } from "react-router-dom";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// import { h } from "@fullcalendar/core/preact";
import {useBookApartmentMutation} from "../../store/api/reservationQuery";
import toast from 'react-hot-toast';

const ApartmentDetail = ({  }) => {
    const { state: apartmentData } = useLocation(); // Get additional data from state
    const [bookApartment, { data, error, isLoading, isError }] = useBookApartmentMutation(); 
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        apartmentId: apartmentData._id,
        message: ""
    });

    useEffect(() => {
        if (data) {
            setFormData({
                checkIn: "",
                checkOut: "",
                message: ""
            });
            toast.success("Apartment booked successfully");
        }
        if (isError) {
            console.log(error.data.error);
            toast.error(error.data.error,
                {
                    duration: 4000,
                    position: 'top-right',
                    style: {
                        background: '#333',
                        color: '#fff',
                }
            }
            

                );
        }
    }, [data, isError]);



    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    }

    const handleBook = async () => {

        try {
           const response = await bookApartment(formData);
        }
        catch (error) {
            console.log(error);
        }


    }

    return (
        <>
        <HomeNav/>

        {/* <!-- section_1 -->  */}



    <div class="  max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800 mt-7 mb-3">{apartmentData.name}, MAR</h1>
                <div className="flex items-center space-x-2">
                    <i className="uil uil-star text-yellow-400 text-2xl"></i>
                    <span className="text-gray-500">4.5</span>

                    <span className="text-gray-500"> (24 reviews)</span>

                    <span className="text-gray-500"> | </span>


                    <i className="uil uil-share-alt text-gray-500 text-2xl"></i>

                </div>
            </div>
    <div class="flex flex-col md:flex-row gap-2 md:mx-10">
                    <div class="flex flex-1 flex-col">
            <div class="flex flex-1 flex-col">
                {/* <!-- img_01 -->  */}
                {/* <Zoom> */}
                <img class="object-cover h-full rounded-xl" src={apartmentData.images[0]} alt=''/>
                {/* </Zoom> */}
            </div>
        </div>
        <div class="flex flex-1">
            <div class="grid grid-cols-2 gap-2">
                {apartmentData.images && apartmentData.images.map((image, index) => (
                    <div>
                {/* <!-- img_02 --> */}
                            {/* <Zoom
                            overlayBgColorStart='rgba(255, 255, 255, 0.95)'
                            zoomMargin={30}
                            wrapperStyle={{ display: 'inline-block' }} // Ajuste le style du conteneur autour de l'image
                            zoomImageStyle={{ borderRadius: 'none' }}
                            > */}

                        <img class="object-cover h-full rounded-xl" src={image} alt=''/>
                        {/* </Zoom> */}

                    </div>
                ))}
            </div>
        </div>
    </div>

</div>

            <div className="container md:mt-0 mt-16">
                <div className="md:flex">
                    <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3 md:ms-[10rem]">
                        <h4 className="text-2xl font-medium">{apartmentData.address}, Mar</h4>

                        <ul className="mt-6 box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
            {apartmentData.characteristics && apartmentData.characteristics.map((characteristic, index) => (
          <li className="mr-4 flex items-center text-left">
            <i className="mr-2 text-2xl text-green-600">

              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg>
            </i>
            <span className="text-sm">{characteristic}</span>
          </li>
            ))}
            </ul>
        
                        

                        <p className="text-slate-400">{apartmentData.description}</p>
                        <p className="text-slate-400 mt-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    
                        <div className="w-full leading-[0] border-0 mt-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} className="w-full h-[500px]" allowfullscreen=""></iframe>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                    <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                        Book the apartment
                        </div>
                            <form class="py-4 px-6">
                            
                                <div class="mb-4">
                                    <label class="block text-gray-700 font-bold mb-2" for="date">
                                    checkIn
                                    </label>
                                    <input
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleInputChange}
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="date" type="date" placeholder="Select a date"/>
                                </div> 
                                <div class="mb-4">
                                    <label class="block text-gray-700 font-bold mb-2" for="date">
                                    checkOut
                                    </label>
                                    <input
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleInputChange}
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="date" type="date" placeholder="Select a date"/>
                                </div>                          
                                <div class="mb-4">
                                    <label class="block text-gray-700 font-bold mb-2" for="message">
                                        Message
                                    </label>
                                    <textarea
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message" rows="4" placeholder="Enter any additional information"></textarea>
                                </div>
                                <div class="flex items-center justify-between mb-4">
                                    <button
                                        class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={handleBook}
                                        >
                                        Book
                                    </button>

                                    <div
                                        className="text-gray-700 text-lg font-bold ml-4"
                                    >
                                    {apartmentData.price} MAD, per night    
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ApartmentDetail;