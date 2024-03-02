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
        }),
        addTask : builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task
            })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url:   `/tasks/${id}`,
                method:'DELETE',
            })
        })
    }),
})


export const { useGetAllTaskQuery, useUpdateTaskMutation, useAddTaskMutation, useDeleteTaskMutation } = baseApi;