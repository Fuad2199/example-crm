import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ContactsResponse } from '../types/contacts.types';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/api/' }),
  endpoints: (builder) => ({
    getContactsData: builder.query<ContactsResponse, void>({
      query: () => 'contacts',
    }),
  }),
});

export const { useGetContactsDataQuery } = contactsApi;
