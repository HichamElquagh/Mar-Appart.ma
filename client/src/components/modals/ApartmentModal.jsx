import React, { useEffect, useState } from 'react';
import { useCreateApartmentMutation } from '../../store/api/apartmentQuery';
import axios from 'axios';
import './styles.css';
const ApartmentModal = ( {
  showModal,
  setShowModal,
  apartmentToUpdate,
  showModalForUpdate,
  setShowModalForUpdate,
} ) => {
 


  const [AddApartment, { isLoading, isError, error }] = useCreateApartmentMutation();

  const availableCharacteristics = [
    { id: 1, value: 'balcony', label: 'Balcony' },
    { id: 2, value: 'garden', label: 'Garden' },
    { id: 3, value: 'pool', label: 'Pool' },
    { id: 4, value: 'garage', label: 'Garage' },
    { id: 5, value: 'gym', label: 'Gym' },
    { id: 6, value: 'security', label: 'Security' },
  ];
  const [apartmentData, setApartmentData] = useState({
    name: '',
    images: [],
    city: '',
    address: '',
    price: '',
    description: '',
    numberOfPersons: '',
    space: '',
    characteristics: [],
  });
  const [imagePath, setImagePath] = useState([]);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setApartmentData({
      name: '',
      images: [],
      city: '',
      address: '',
      price: '',
      description: '',
      numberOfPersons: '',
      space: '',
      characteristics: [],
    });
    setErrors({});
  };
  useEffect(() => {
    if (showModalForUpdate) {
      setApartmentData(apartmentToUpdate);
    }
  }, [showModalForUpdate, apartmentToUpdate]);

  const handleCloseModal = () => {
    setShowModal(false);
    if (showModalForUpdate) {
      setShowModalForUpdate(false);
    }
    resetForm();
  };

  const validate = () => {
    const newErrors = {};
    if (!apartmentData.name) newErrors.name = 'Name is required';
    if (imagePath.length === 0) newErrors.images = 'Image is required';
    if (!apartmentData.city) newErrors.city = 'City is required';
    if (!apartmentData.address) newErrors.address = 'Address is required';
    if (!apartmentData.price) newErrors.price = 'Price is required';
    if (!apartmentData.description) newErrors.description = 'Description is required';
    if (!apartmentData.numberOfPersons) newErrors.numberOfPersons = 'Number of persons is required';
    if (!apartmentData.space) newErrors.space = 'Space is required';
    if (apartmentData.characteristics.length === 0) newErrors.characteristics = 'Characteristics is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApartmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOptionChange = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setApartmentData((prevData) => ({
      ...prevData,
      [name]: selectedValues,
    }));
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (!files) return;

    const filesArray = Array.from(files);
    setImagePath(filesArray);
  };

  const handleImageSubmit = async () => {
    const cloudinaryPreset = 'y2xzakhz'; // Replace with your preset name
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dbexsjmb3/image/upload`;

    const formData = new FormData();
    formData.append('upload_preset', cloudinaryPreset);

    const uploadPromises = imagePath.map((image) => {
      formData.append('file', image);

      return axios.post(cloudinaryUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    });

    try {
      const responses = await Promise.all(uploadPromises);
      const uploadedImageUrls = responses.map((response) => response.data.secure_url);
      return uploadedImageUrls;
    } catch (error) {
      console.error('Upload failed:', error);
      // Handle upload errors (display error messages, etc.)
    }
  };

  const handleSubmit = async (e) => {
    console.log('Apartment data:');
    console.log(apartmentData);
    // e.preventDefault();
    if (!validate()) {
      return;
    }
    const urls = await handleImageSubmit();
    console.log('Image URLs:', urls);
    try {
      const obj = {
        ...apartmentData,
        images: urls,
      };
      const response = await AddApartment(obj).unwrap();
      console.log('Apartment data:', response);
      // Logic to send form data to your API
      console.log('Apartment data:', obj);
      // Reset form after successful submission
      if (response.apartment) {
      resetForm();
      setShowModal(false);}
    } catch (error) {
      console.error('Submission failed:', error);
      // Handle submission errors (display error messages, etc.)
    }
  };
  const handleUpdate = async (e) => {
    
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const urls = await handleImageSubmit();
    console.log('Image URLs:', urls);
    try {
      const obj = {
        ...apartmentData,
        images: urls,
      };
      // Logic to send form data to your API
      console.log('Apartment data:', obj);
      // Reset form after successful submission
      resetForm();
      setShowModal(false);
      setShowModalForUpdate(false);
    } catch (error) {
      console.error('Submission failed:', error);
      // Handle submission errors (display error messages, etc.)
    }
  }



  return (
    <>
      {showModal ? (
          <>
            <div className="justify-center bg-black bg-opacity-80 h-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-[90vh] overflow-y-scroll"

                >
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                   {showModalForUpdate ? (
                      <h3 className="text-2xl font-semibold">
                        UPDATE APARTMENT
                      </h3>
                    ) : (
                      <h3 className="text-2xl font-semibold">
                        ADD APARTMENT
                      </h3>
                    )}
                    <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleCloseModal()}>
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </span>
                  </button>
                  </div>

                  {/*body*/}
                  <div className="relative p-6 flex-auto overflow-scroll-y">
                    <form className=" mb-2 w-80 max-w-screen-lg sm:w-96" >
                      <div className="mb-4 flex flex-col gap-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                          <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            value={apartmentData.name}
                            name="name"
                            onChange={handleChange}/>
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                             Name
                          </label>
                          {errors.name && <span className="text-red-600 text-xs">{errors.name}</span>}
                        </div>
                        <div className="relative h-auto w-full min-w-[200px]">
                          <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            type="file"
                            multiple
                            onChange={handleImageChange}
                            name="imagePath"

                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Images
                          </label>
                        </div>
                        {errors.images && <span className="text-red-600 text-xs">{errors.images}</span>}
                        <div className="relative h-11 w-full min-w-[200px]">
                          <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            value={apartmentData.city}
                            name="city"
                            onChange={handleChange}
                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            City
                          </label>
                          {errors.city && <span className="text-red-600 text-xs">{errors.city}</span>}
                        </div>
                        {/* Address */}
                        <div className="relative h-11 w-full min-w-[200px]">
                          <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            value={apartmentData.address}
                            name="address"
                            onChange={handleChange}
                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Address
                          </label>
                          {errors.address && <span className="text-red-600 text-xs">{errors.address}</span>}
                        </div>
                        {/* Price */}
                        <div className="relative h-11 w-full min-w-[200px]">
                          <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            value={apartmentData.price}
                            name="price"
                            onChange={handleChange}
                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Price
                          </label>
                          {errors.price && <span className="text-red-600 text-xs">{errors.price}</span>}
                        </div>
                        {/* Description */}
                        <div className="relative h-11 w-full min-w-[200px] min-h-[5rem]">
                          <textarea
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            value={apartmentData.description}
                            name="description"
                            onChange={handleChange}
                          ></textarea>
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Description
                          </label>
                          {errors.description && <span className="text-red-600 text-xs">{errors.description}</span>}
                        </div>
                        {/* Number of Persons */}
                        <div className="relative h-11 w-full min-w-[200px]">
                          <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            value={apartmentData.numberOfPersons}
                            name="numberOfPersons"
                            onChange={handleChange}
                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Number of Persons
                          </label>
                          {errors.numberOfPersons && <span className="text-red-600 text-xs">{errors.numberOfPersons}</span>}
                        </div>
                        {/* Space */}
                        <div className="relative h-11 w-full min-w-[200px]">
                          <input
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            value={apartmentData.space}
                            name="space"
                            onChange={handleChange}
                          />
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Space
                          </label>
                          {errors.space && <span className="text-red-600 text-xs">{errors.space}</span>}
                        </div>
                        {/* Characteristics */}
                        <div className="relative">
                          <select
                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            multiple
                            onChange={handleOptionChange}
                            name="characteristics"
                          >
                            {availableCharacteristics.map((characteristic) => (
                              <option key={characteristic.id} value={characteristic.value}>
                                {characteristic.label}
                              </option>
                            ))}
                          </select>
                          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Characteristics
                          </label>
                        </div>
                        {errors.characteristics && <span className="text-red-600 text-xs">{errors.characteristics}</span>}
                        
                        </div>
                        {showModalForUpdate ? (

                        <button
                        type="button"
                        onClick={handleUpdate}
                        className="mt-6 block w-full select-none rounded-lg bg-gray-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-600/20 transition-all hover:shadow-lg hover:shadow-gray-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
                          Update
                        </button>
                        )
                        :(

                      <button 
                      type="button"
                      onClick={handleSubmit}
                      className="mt-6 block w-full select-none rounded-lg bg-gray-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-600/20 transition-all hover:shadow-lg hover:shadow-gray-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
                        Save

                      </button>
                       )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
    </>
    
  );
};

export default ApartmentModal;