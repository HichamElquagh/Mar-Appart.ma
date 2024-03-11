import React, { useState } from 'react';
import { useCreateApartmentMutation } from '../../store/api/apartmentQuery';
const ApartmentModal = () => {
 

  const [apartmentData, setApartmentData] = useState({
    name: '',
    image: [],
    city: '',
    address: '',
    price: '',
    description: '',
    numberOfPersons: '',
    space: '',
    characteristics: [],
    });
    const [errors , setErrors] = useState({});
    const [AddApartment, { isLoading, isError, error }] =
    useCreateApartmentMutation();

    const validate = () => {
      const newErrors = {};
      if (!apartmentData.name) newErrors.name = 'Name is required';
      if (!apartmentData.image.length === 0) newErrors.image = 'Image is required';
      if (!apartmentData.city) newErrors.city = 'City is required';
      if (!apartmentData.address) newErrors.address = 'Address is required';
      if (!apartmentData.price) newErrors.price = 'Price is required';
      if (!apartmentData.description) newErrors.description = 'Description is required';
      if (!apartmentData.numberOfPersons) newErrors.numberOfPersons = 'Number of persons is required';
      if (!apartmentData.space) newErrors.space = 'Space is required';
      if (apartmentData.characteristics.length === 0 ) newErrors.characteristics = 'Characteristics is required';

      setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

    };
    console.log(errors);

    

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setApartmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(apartmentData);
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
    const { name, files } = e.target;
    setApartmentData((prevData) => ({
      ...prevData,
      [name]: files,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()){
      return;
    }
    console.log(apartmentData);
    
    try {
      const response = await AddApartment(apartmentData);
      console.log('Apartment added', response.data);

    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        data-hs-overlay="#hs-focus-management-modal"
      >
        Open modal
      </button>

      {/* Modal */}
      <div
        id="hs-focus-management-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">Modal title</h3>
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-focus-management-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              {/* Generate input fields based on the schema */}
              {Object.entries(apartmentData).map(([key, value]) => (
                  key === 'image' ? (
                    <div key={key} className="mb-4">
                      <label htmlFor={key} className="block text-sm font-medium mb-2 dark:text-white">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id={key}
                        name={key}
                        multiple={true}
                        onChange={handleImageChange}
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                        file:bg-gray-50 file:border-0
                        file:me-4
                        file:py-3 file:px-4 file:sm:py-5
                        dark:file:bg-gray-700 dark:file:text-gray-400"
                      />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>
                  ) :
                  key === 'characteristics' ? (
                    <div key={key} className="mb-4">
                      <label htmlFor={key} className="block text-sm font-medium mb-2 dark:text-white">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <select
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleOptionChange}
                        multiple={true}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      >
                         <option value="" disabled>
                          Select an option
                        </option> 
                        <option value="balcony">Balcony</option>
                        <option value="garden">Garden</option>
                        <option value="pool">Pool</option>
                        <option value="garage">Garage</option>
                      </select>
                      {errors.characteristics && <p className="text-red-500 text-sm">{errors.characteristics}</p>}

                    </div>
                  ) :
                  key === 'description' ? ( 
                  
                    <div key={key} className="mb-4">
                      <label htmlFor={key} className="block text-sm font-medium mb-2 dark:text-white">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <textarea
                        id={key}
                        name={key}  
                        value={value}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        rows="3"
                        placeholder="This is a textarea placeholder"
                      />
                  {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>
                  
                  ) :
                  key === 'city' ? (
                    <div key={key} className="mb-4">
                      <label htmlFor={key} className="block text-sm font-medium mb-2 dark:text-white">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <select

                        id={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      >
                        <option value="" disabled>
                          Select a city
                        </option>
                        <option value="1">City 1</option>
                        <option value="2">City 2</option>
                        <option value="3">City 3</option>
                        <option value="4">City 4</option>
                      </select>
                      {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

                    </div>
                  ) :
                  key === 'numberOfPersons' ? (
                    <div key={key} className="mb-4">
                      <label htmlFor={key} className="block text-sm font-medium mb-2 dark:text-white">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <select
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      >
                        <option value="" disabled>
                          Select number of persons
                        </option>
                        <option value="1">1 person</option>
                        <option value="2">2 persons</option>
                        <option value="3">3 persons</option>
                        <option value="4">4 persons</option>
                      </select>
                      {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
                    </div>
                  ) :
                  (
                    
                <div key={key} className="mb-4">
                  <label htmlFor={key} className="block text-sm font-medium mb-2 dark:text-white">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder={`Enter ${key}`}
                  />
                      {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
                </div>
                )
              ))}
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="py-2 px-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                type="button"
                className="py-2 px-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-focus-management-modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentModal;