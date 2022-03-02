import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFmMWU0MzVhMmMzNDAwMTUxNzY2YTUiLCJpYXQiOjE2NDYyMTcyMzB9.k45AYfGQPQi2RtuqIgMsbNViH-_WwpwhPZyf9311ZNo',
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? result.map(({ id }) => ({ type: 'Contacts', id }))
          : ['Contacts'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        data: newContact,
      }),
      // transformResponse: response => {
      //   console.log('response: ', response);

      //   return response.data;
      // },
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: contactID => ({
        url: `/contacts/${contactID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
