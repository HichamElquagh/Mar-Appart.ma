import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = 'http://localhost:3000';

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUsers: builder.query({
        query: () => '/users',
        }),
        getUser: builder.query({
        query: (id) => `/users/${id}`,
        }),
        createUser: builder.mutation({
        query: (user) => ({
            url: '/users',
            method: 'POST',
            body: user,
        }),
        }),
        updateUser: builder.mutation({
        query: ({ id, ...patch }) => ({
            url: `/users/${id}`,
            method: 'PATCH',
            body: patch,
        }),
        }),
        deleteUser: builder.mutation({
        query: (id) => ({
            url: `/users/${id}`,
            method: 'DELETE',
        }),
        }),
    }),
    });

export const { useGetUsersQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
export default userApi ;