import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getAllTask: builder.query({
            query: () => '/tasks'
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data
            })
        })
    }),
})


export const { useGetAllTaskQuery, useUpdateTaskMutation } = baseApi;