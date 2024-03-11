import React from "react";
import HomeNav from "../../components/myn/HomeNav";
import room from "../../assets/images/room.jpg";

const FilterPage = () => {
    return (
        <>
        <HomeNav/>
        <section class="py-24 relative">
        <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div class="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-end w-full">
            </div>
            <svg class="my-7 w-full" xmlns="http://www.w3.org/2000/svg" width="1216" height="2" viewBox="0 0 1216 2"
                fill="none">
                <path d="M0 1H1216" stroke="#E5E7EB" />
            </svg>
            <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                    <div class="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                        <h6 class="font-medium text-base leading-7 text-black mb-5">Your Workspace</h6>
                        <div class="flex items-center mb-5 gap-1">
                            <div class="relative w-full">
                                <select id="FROM"
                                    class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                    <option selected>Min</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                    <option value="option 4">option 4</option>
                                </select>
                                <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                        stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p class="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
                            <div class="relative w-full">
                                <select id="FROM"
                                    class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                    <option selected>Max</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                    <option value="option 4">option 4</option>
                                </select>
                                <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                        stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-600 w-full">Zip
                            Code</label>
                        <div class="relative w-full mb-8">
                            <select id="FROM"
                                class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>Write code</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                            <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <button
                            class="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                                    stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Search
                        </button>
                    </div>

                    <div class="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                        <div class="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                            <p class="font-medium text-base leading-7 text-black ">Filter Plans</p>
                            <p
                                class="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                                RESET</p>
                        </div>


                        <div class="w-full mb-7">
                            <div class='accordion-group grid grid-cols-1 gap-5 sm:gap-9'
                                data-accordion="default-accordion">
                                <div class='accordion '
                                    id='category-heading-one'>
                                    <button
                                        class='accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600'
                                        aria-controls='category-collapse-one'>
                                        <h5 class="font-medium text-sm text-gray-900">
                                            Availability
                                        </h5>
                                        <svg class='text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180'
                                            width='22' height='22' viewBox='0 0 22 22' fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25'
                                                stroke='currentColor' stroke-width='1.6' stroke-linecap='round'
                                                stroke-linejoin='round'></path>
                                        </svg>

                                    </button>
                                    <div id='category-collapse-one'
                                        class='accordion-content w-full px-0 overflow-hidden pr-4 max-h-0 '
                                        aria-labelledby='category-heading-one'>
                                        
                                        <div class="box flex flex-col gap-2 mt-5">
                                           
                                            <div class="flex items-center mb-2">
                                                <input id="checkbox-option-1" type="checkbox" value="" class="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                <label for="checkbox-option-1" class="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-1</label>
                                                </div>
                                                <div class="flex items-center mb-2">
                                                    <input id="checkbox-option-2" type="checkbox" value="" class="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]" />
                                                    <label for="checkbox-option-2" class="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-2</label>
                                                    </div>
                                                    <div class="flex items-center mb-2">
                                                        <input id="checkbox-option-3" type="checkbox" value="" class="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-600 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                        <label for="checkbox-option-3" class="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-3</label>
                                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <label for="Offer" class="font-medium text-sm leading-6 text-gray-600 mb-1">Offer</label>
                        <div class="relative w-full mb-7">
                            <select id="Offer"
                                class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>5% off upi discount</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                            <svg class="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p class="font-medium text-sm leading-6 text-black mb-3">Discount</p>
                        <div class="box flex flex-col gap-2">
                            <div class="flex items-center">
                                <input id="checkbox-default-1" type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label for="checkbox-default-1" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">20% or more</label>
                            </div>
                            <div class="flex items-center">
                                <input id="checkbox-default-2" type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label for="checkbox-default-2" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">30% or more</label>
                            </div>
                            <div class="flex items-center">
                                <input id="checkbox-default-3" type="checkbox" value="" class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label for="checkbox-default-3" class="text-xs font-normal text-gray-600 leading-4 cursor-pointer">50% or more</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-9  ">
                      
                <section class="flex flex-col items-center bg-white h-screen overflow-y-scroll">
  {/* <h1 class="mt-10 text-4xl font-bold text-gray-800">New Listings</h1> */}
  <div class="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-2 lg:gap-8">
    <article class="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
      <div class="">
        <img src={room} alt="" class="" />
      </div>

      <div class="p-4">
        <div class="pb-6">
          <a href="#" class="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a>
        </div>

        <ul class="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- uil:compress-arrows --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg
            ></i>
            <span class="text-sm">1200sqf</span>
          </li>

          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- ic:outline-king-bed --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg
            ></i>
            <span class="text-sm">4 Beds</span>
          </li>

          <li class="flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- bx:bath --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
            </i>
            <span class="text-sm">4 Baths</span>
          </li>
        </ul>

        <ul class="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
          <li class="text-left">
            <span class="text-sm text-gray-400">Price</span>
            <p class="m-0 text-base font-medium">$5000</p>
          </li>

          <li class="text-left">
            <span class="text-sm text-gray-400">Rating</span>
            <ul class="m-0 flex items-center p-0 font-medium">
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </li>
              <li class="ml-2 inline text-base">5.0(30)</li>
            </ul>
          </li>
        </ul>
      </div>
    </article>

    {/* <!--end property--> */}
    <article class="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
      <div class="">
      <img src={room} alt="" class="" />
      </div>

      <div class="p-4">
        <div class="pb-6">
          <a href="#" class="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a>
        </div>

        <ul class="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- uil:compress-arrows --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg
            ></i>
            <span class="text-sm">1200sqf</span>
          </li>

          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- ic:outline-king-bed --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg
            ></i>
            <span class="text-sm">4 Beds</span>
          </li>

          <li class="flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- bx:bath --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
            </i>
            <span class="text-sm">4 Baths</span>
          </li>
        </ul>

        <ul class="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
          <li class="text-left">
            <span class="text-sm text-gray-400">Price</span>
            <p class="m-0 text-base font-medium">$5000</p>
          </li>

          <li class="text-left">
            <span class="text-sm text-gray-400">Rating</span>
            <ul class="m-0 flex items-center p-0 font-medium">
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </li>
              <li class="ml-2 inline text-base">5.0(30)</li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
    {/* <!--end property--> */}

    {/* <!--end property--> */}
    <article class="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
      <div class="">
      <img src={room} alt="" class="" />
      </div>

      <div class="p-4">
        <div class="pb-6">
          <a href="#" class="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a>
        </div>

        <ul class="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- uil:compress-arrows --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg
            ></i>
            <span class="text-sm">1200sqf</span>
          </li>

          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- ic:outline-king-bed --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg
            ></i>
            <span class="text-sm">4 Beds</span>
          </li>

          <li class="flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- bx:bath --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
            </i>
            <span class="text-sm">4 Baths</span>
          </li>
        </ul>

        <ul class="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
          <li class="text-left">
            <span class="text-sm text-gray-400">Price</span>
            <p class="m-0 text-base font-medium">$5000</p>
          </li>

          <li class="text-left">
            <span class="text-sm text-gray-400">Rating</span>
            <ul class="m-0 flex items-center p-0 font-medium">
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </li>
              <li class="ml-2 inline text-base">5.0(30)</li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
    {/* <!--end property--> */}

    {/* <!--end property--> */}
    <article class="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
      <div class="">
      <img src={room} alt="" class="" />
      </div>

      <div class="p-4">
        <div class="pb-6">
          <a href="#" class="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">238 Baton Rouge, LA 70809, USA</a>
        </div>

        <ul class="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- uil:compress-arrows --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg
            ></i>
            <span class="text-sm">1200sqf</span>
          </li>

          <li class="mr-4 flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- ic:outline-king-bed --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-5zm-4-2h-5V7h5v3zM6 7h5v3H6V7zm-2 5h16v3H4v-3z" /></svg
            ></i>
            <span class="text-sm">4 Beds</span>
          </li>

          <li class="flex items-center text-left">
            <i class="mr-2 text-2xl text-green-600">
              {/* <!-- bx:bath --> */}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z" /></svg>
            </i>
            <span class="text-sm">4 Baths</span>
          </li>
        </ul>

        <ul class="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
          <li class="text-left">
            <span class="text-sm text-gray-400">Price</span>
            <p class="m-0 text-base font-medium">$5000</p>
          </li>

          <li class="text-left">
            <span class="text-sm text-gray-400">Rating</span>
            <ul class="m-0 flex items-center p-0 font-medium">
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </li>
              <li class="inline text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </li>
              <li class="ml-2 inline text-base">5.0(30)</li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
    {/* <!--end property--> */}
  </div>
</section>
                </div>
                 
                
            </div>

        </div>
    </section>
        </>
    )
}

export default FilterPage;