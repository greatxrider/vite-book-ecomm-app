// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

interface Items {
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

interface ItemsApiResponse {
    items: Items[]
}

export const itemsApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/v1/volumes" }),
    reducerPath: "itemsApi",
    tagTypes: ["Items"],
    endpoints: build => ({
        getItems: build.query<ItemsApiResponse, string>({
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
            providesTags: (result, error, query) => [{ type: "Items", query }],
        }),
    }),
})

export const { useGetItemsQuery } = itemsApiSlice;
