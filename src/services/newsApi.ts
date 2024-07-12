import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BusinessNews } from "@/types/BusinessNews";

const apiKey = import.meta.env.VITE_API_KEY;

export interface BusinessNewsResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: BusinessNews[];
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getBusinessNews: build.query<BusinessNewsResponse, void>({
      query: () => `content/nyt/business.json?api-key=${apiKey}`,
    }),
    getSingleBusinessNews: build.query<BusinessNews | undefined, string>({
      query: () => `content/nyt/business.json?api-key=${apiKey}`,
      transformResponse(response: BusinessNewsResponse, _meta, arg) {
        return response.results.find((news) => news.slug_name === arg);
      },
    }),
  }),
});

export const { useGetBusinessNewsQuery, useGetSingleBusinessNewsQuery } =
  newsApi;
