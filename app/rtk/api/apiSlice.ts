import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: number;
  name: string;
  email: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
  }),
  endpoints: (builder) => ({
    getUser: builder.query<User[], number | string>({
      query: (userid) => `/users/${userid}`,
    }),
  }),
});

export const { useGetUserQuery } = apiSlice;
