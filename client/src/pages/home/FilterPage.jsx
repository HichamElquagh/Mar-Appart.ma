import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import HomeNav from "../../components/home/HomeNav";
import FilterSectionApartment from "../../components/home/FilterSectionApartment";
import cities from '../../ma.json'
function valuetext(value) {
  console.log(value);
  return `${value}°C`;
}

const FilterPage = () => {
  const [FilterData, setFilterData] = useState({
    numberOfPersons: "",
    city: "",
    price: [0, 1000],
  
  });
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setFilterData({ ...FilterData, price : newValue });
  };
  const handleInputChange = (event) => {
    setFilterData({ ...FilterData, [event.target.name] : event.target.value });
  }
  console.log(FilterData);
    
    return (
        <>
        <HomeNav/>
        <section className="py-24 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-end w-full">
            </div>
            <svg className="my-7 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                fill="none">
                <path d="M0 1H1216" stroke="#E5E7EB" />
            </svg>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                    <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                        <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                            <p className="font-medium text-base leading-7 text-black ">Filter Plans</p>
                            <p
                                className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                                RESET</p>
                        </div>


                        <label for="Offer" className="font-medium text-sm leading-6 text-gray-600 mb-1">Person</label>
                        <div className="relative w-full mb-7">
                            <select 
                            name="numberOfPersons"
                            onChange={handleInputChange}
                            id="Offer"
                                className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected value="">Chose a number of person</option>
                                 {["1","2","3","4","5","6"].map((item,index)=>(
                                    <option value={item}>{item}</option>
                                ))}
                                
                            </select>
                            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <label for="Offer" className="font-medium text-sm leading-6 text-gray-600 mb-1">City</label>
                        <div className="relative w-full mb-7">
                            <select 
                            name="city"
                            onChange={handleInputChange}
                            id="Offer"
                                className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>Choose a City</option>
                               {cities.map((item,index)=>(
                                  
                                    <option value={item.city}>{item.city}</option>
                                ))}
                            </select>
                            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <label for="Offer" className="font-medium text-sm leading-6 text-gray-600 mb-1">Price</label>
                          <Box sx={{ width: 250 }}>
                            <Slider
                              getAriaLabel={() => 'Temperature range'}
                              value={FilterData.price}
                              onChange={handleChange}
                              max={1000}
                              marks={[
                                {
                                  value: 0,
                                  label: '0',
                                },
                                {
                                  value: 1000,
                                  label: '1000 dh',
                                },
                              ]}

                              valueLabelDisplay="auto"
                              getAriaValueText={valuetext}
                            />
                          </Box>
                        <p className="font-medium text-sm leading-6 text-black mb-3">Amenities</p>
                        <div className="box flex flex-col gap-2">
                            <div className="flex items-center">
                                <input id="checkbox-default-1" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label for="checkbox-default-1" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">20% or more</label>
                            </div>
                            <div className="flex items-center">
                                <input id="checkbox-default-2" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label for="checkbox-default-2" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">30% or more</label>
                            </div>
                            <div className="flex items-center">
                                <input id="checkbox-default-3" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label for="checkbox-default-3" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">50% or more</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-9  ">
                <FilterSectionApartment  FilterData={FilterData}  />
                
                </div>
                 
                
            </div>

        </div>
    </section>
        </>
    )
}

export default FilterPage;