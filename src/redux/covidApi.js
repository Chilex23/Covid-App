import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covidnigeria.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    getCovidData: builder.query({
      query: () => `/`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetCovidData } = covidApi;
