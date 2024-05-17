import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Blog {
    name: string;
    url: string;
    image: {
        contentUrl: string;
    };
    description: string;
    about: {
        readLink: string;
        name: string;
    }[];
    provider: {
        _type: string;
        name: string;
        image: {
            thumbnail: {
                contentUrl: string;
            };
        };
    }[];
    datePublished: string;
    category: string;
}

interface BlogsApiResponse {
    value: Blog[];
}

export const blogsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.bing.microsoft.com/v7.0/news/search",
        prepareHeaders: (headers) => {
            headers.set('Ocp-Apim-Subscription-Key', 'ff12b9d28699457eb37134ff457681e0');
            return headers;
        }
    }),
    reducerPath: "blogApi",
    tagTypes: ["Blog"],
    endpoints: (build) => ({
        getItems: build.query<BlogsApiResponse, { query: string; count: number }>({
            query: ({ query, count }) => {
                const params = new URLSearchParams({
                    q: query,
                    count: count.toString(),
                    originalImg: 'true',
                });

                return {
                    url: "",
                    params,
                };
            },
            providesTags: (result, error, { query }) => [{ type: "Blog", query }],
        }),
    }),
});

export const { useGetItemsQuery } = blogsApiSlice;
