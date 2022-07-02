import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Auth'],
  endpoints: builder => ({
    getAuth: builder.query({
      query: () => `/users/current`,
      providesTags: ['Auth'],
    }),

    // deleteContact: builder.mutation({
    //   query: contactId => ({
    //     url: `/contacts/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),

    register: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),

    login: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ['Auth'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useGetAuthQuery,
  //   useDeleteContactMutation,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;
