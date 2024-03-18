import React , {useEffect, useState} from "react";
import backgroundImage from "../../assets/images/backgroundImage.jpg";
import backgroundImage1 from "../../assets/images/closeup-shot-building-with-big-wooden-doors.jpg";
import logo from "../../assets/images/logo-no-background.png";
import room from "../../assets/images/room.jpg";
import { Link } from "react-router-dom";
import HomeNav from "../../components/home/HomeNav";
import HomeSectionApartment from "../../components/home/HomeSectionApartment";
import axios from "axios";
import cities from "../../ma.json"
import Footer from "../../components/home/Footer";

const Homepage = () => {
  const [searchData, setSearchData] = useState({
    address: "",
    city: ""
  });
  
   
  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = () => {
    console.log("Searching", searchData);
  };
  return (
    <>
      
      <HomeNav/>

      <div className="relative flex flex-col justify-center items-center gap-24 bg-[#00000030]"  style={{ minHeight: "100vh" }} >
        <video autoPlay loop muted playsInline  className="w-full h-full object-cover absolute -z-10">
          <source src="/pexels-taryn-elliott-5433978 (1080p).mp4" type="video/mp4" />
        </video>

        <div className="text-center">
          <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
            Easy way to find your dream property
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto">
            A great plateform to buy, sell and rent your properties without any
            agent or commisions.
          </p>
        </div>

        <section className="px-2 md:px-0">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
              <div className="flex bg-gray-100 p-4 md:w-72 space-x-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 opacity-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  onChange={handleChange}
                  name="address"
                  className="bg-gray-100 outline-none flex-1"
                  type="text"
                  placeholder="Apartment place"
                />
              </div>
              <div className="relative">
                <select
                onChange={handleChange}
                name="city"
                  className="py-3 px-4 me-4 rounded-lg text-gray-500 font-semibold cursor-pointer bg-white appearance-none"
                >
                  <option value="all">All cities</option>
                  {cities.map((city) => (
                    <option value={city.city}>{city.city}</option>
                  ))}
                  {/* Add more cities as needed */}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 h-6 w-6 pointer-events-none text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
            </div>
          </div>
        </section> 

        {/* <!-- ========== END HEADER ========== --> */}
      </div>
      
      <HomeSectionApartment searchData={searchData} />
     
      {/* <!-- End Card Blog --> */}

      <section className="container  w-full max-w-screen-xl py-10 mx-auto ">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            How It Works
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-32 w-32 fill-green-600/5 mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-3xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-xl font-medium">Evaluate Property</h5>
              <p className="text-slate-400 mt-3">
                If the distribution of letters and words is random, the reader
                will not be distracted from making.
              </p>
            </div>
          </div>
          <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-32 w-32 fill-green-600/5 mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-3xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-xl font-medium">Meeting with Agent</h5>
              <p className="text-slate-400 mt-3">
                If the distribution of letters and words is random, the reader
                will not be distracted from making.
              </p>
            </div>
          </div>
          <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-32 w-32 fill-green-600/5 mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-3xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                </svg>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-xl font-medium">Close the Deal</h5>
              <p className="text-slate-400 mt-3">
                If the distribution of letters and words is random, the reader
                will not be distracted from making.
              </p>
            </div>
          </div>

          {/* <!-- Add other grid items here --> */}
        </div>
      </section>

      {/* <!-- Section 5 --> */}
      <section className="flex items-center justify-center py-20 bg-white min-w-screen">
        <div className="px-16 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
              Don't just take our word for it
            </p>

            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              See what others are saying
            </h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">John Doe</h4>
                    <p className="text-gray-600">CEO of Something</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "This is a no-brainer if you want to take your business to the
                  next level. If you are looking for the ultimate toolset, this
                  is it!"
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">Jane Doe</h4>
                    <p className="text-gray-600">CTO of Business</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "Thanks for creating this service. My life is so much easier.
                  Thanks for making such a great product."
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">John Smith</h4>
                    <p className="text-gray-600">Creator of Stuff</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "Packed with awesome content and exactly what I was looking
                  for. I would highly recommend this to anyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 7 --> */}
      <Footer/>
     
    </>
  );
};

export default Homepage;
