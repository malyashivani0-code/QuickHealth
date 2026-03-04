import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
    reducerPath: "doctorsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://quickhealth.onrender.com/api/v1",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("accessToken");

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getDoctors: builder.query({
            query: () => "/doctors",
        }),

        login: builder.mutation({
            query: (payload) => ({
                url: "/users/login",
                method: "POST",
                body: payload
            })
        }),

        signup: builder.mutation({
            query: (payload) => ({
                url: "/users/register",
                method: "POST",
                body: payload
            })
        }),
        getDoctorById: builder.query({
            query: (id) => `/doctors/${id}`,
        }),

        bookAppointment: builder.mutation({
            query: (payload) => ({
                url: "/appointments",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Appointments"]
        }),

        getMyAppointments: builder.query({
            query: (userId) => `/appointments/user/${userId}`,
            providesTags: ["Appointments"]
        }),

        deleteAppointments: builder.mutation({
            query: (appointmentsId) => ({
                url: `/appointments/${appointmentsId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Appointments"]
        }),

        getBySpecialty: builder.query({
            query: (params = {}) => {
                const { limit = null, offset = null, specialty } = params;
                return {
                    url: "/doctors",
                    method: "GET",
                    params: {
                        limit,
                        offset,
                        specialty,
                    },
                };
            },
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [
                { type: 'User', id }
            ],
        }),

        updateUser: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'User', id }
            ],
        }),
    })
});

export const { useBookAppointmentMutation, useGetMyAppointmentsQuery, useGetDoctorsQuery,
    useLoginMutation, useSignupMutation, useGetDoctorByIdQuery, useDeleteAppointmentsMutation,
    useGetBySpecialtyQuery, useGetUserByIdQuery, useUpdateUserMutation } = Api;

