
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3000';

const apartmentApi = createApi({
    reducerPath: 'apartmentApi',
    baseQuery: fetchBaseQuery({ baseUrl,
        credentials: 'include', // Include cookies in requests
    }),
    endpoints: (builder) => ({
        getAllApartments: builder.query({
        query: () => '/apartments/all',
        }),
        getApartments: builder.query({
        query: () => '/apartments',
        }),
        getApartment: builder.query({
        query: (id) => `/apartments/${id}`,
        }),
        createApartment: builder.mutation({
        query: (apartment) => ({
            url: '/apartments',
            method: 'POST',
            body: apartment,
        }),
        }),
        updateApartment: builder.mutation({
        query: ({ id, ...patch }) => ({
            url: `/apartments/${id}`,
            method: 'PATCH',
            body: patch,
        }),
        }),
        deleteApartment: builder.mutation({
        query: (id) => ({
            url: `/apartments/${id}`,
            method: 'DELETE',
        }),
        }),
        searchApartmentByCityOrAddress: builder.query({
        query: (data) => {
            const { city, address } = data;
            return {
                url: `/apartments/search?address=${address}&city=${city}`,
            };
        },
        }),
        filterApartments: builder.query({
        query: (data) => {
            const { numberOfPersons,city, price } = data;
            console.log("check data",data);
            return {
                url: `/apartments/filter?numberOfPersons=${numberOfPersons}&city=${city}&price=${price}`,
            };
        },
        }),
    }),
    });


export const { useGetAllApartmentsQuery, useGetApartmentsQuery, useGetApartmentQuery, useCreateApartmentMutation, useUpdateApartmentMutation, useDeleteApartmentMutation , useSearchApartmentByCityOrAddressQuery , useFilterApartmentsQuery   } = apartmentApi;
export default apartmentApi ;