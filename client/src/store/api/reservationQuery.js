import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3000';

const reservationApi = createApi({
    reducerPath: 'reservationApi',
    baseQuery: fetchBaseQuery({ baseUrl,
        credentials: 'include', // Include cookies in requests
    }),
    endpoints: (builder) => ({
        getAllReservations: builder.query({
        query: () => '/reservations/all',
        }),
        getReservations: builder.query({
        query: () => '/reservations',
        }),
        getReservation: builder.query({
        query: (id) => `/reservations/${id}`,
        }),
        bookApartment: builder.mutation({
            query: (data) => ({
                url: '/reservations/book',
                method: 'POST',
                body: data,
            }),
            }),
        updateReservation: builder.mutation({
        query: ({ id, ...patch }) => ({
            url: `/reservations/${id}`,
            method: 'PATCH',
            body: patch,
        }),
        }),
        deleteReservation: builder.mutation({
        query: (id) => ({
            url: `/reservations/${id}`,
            method: 'DELETE',
        }),
        }),
    }),
});

export const { useGetReservationsQuery, useGetReservationQuery, useBookApartmentMutation , useUpdateReservationMutation, useDeleteReservationMutation } = reservationApi;

export default reservationApi;