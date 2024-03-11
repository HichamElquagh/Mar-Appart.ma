
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3000';

const apartmentApi = createApi({
    reducerPath: 'apartmentApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
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
    }),
    });


export const { useGetApartmentsQuery, useGetApartmentQuery, useCreateApartmentMutation, useUpdateApartmentMutation, useDeleteApartmentMutation } = apartmentApi;