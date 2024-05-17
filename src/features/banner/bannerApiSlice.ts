// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

interface Banners {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        }
        categories: string[];
    }
    saleInfo: {
        retailPrice: {
            amount: number,
            currencyCode: string
        }
    }
}

interface BannersApiResponse {
    items: Banners[]
}

export const bannerApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/v1/volumes" }),
    reducerPath: "bannersApi",
    tagTypes: ["Banners"],
    endpoints: build => ({
        getItems: build.query<BannersApiResponse, string>({
            query: (query) => ({
                url: "",
                params: {
                    q: query,
                    orderBy: "newest",
                    startIndex: 10,
                    maxResults: 20,
                    filter: "paid-ebooks",
                    key: API_KEY
                }
            }),
            providesTags: (result, error, query) => [{ type: "Banners", query }],
        }),
    }),
})

export const { useGetItemsQuery } = bannerApiSlice;
