import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const labelApi = createApi({
  reducerPath: 'labelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7159/api/v1/label',
  }),
  endpoints: (builder) => ({
    // GET /api/v1/Label
    getAllLabels: builder.query({
      query: () => '/',
    }),
    // GET /api/v1/Label/{id}
    getLabelById: builder.query({
      query: (id) => `/${id}`,
    }),
    // GET /api/v1/Label/project/{projectId}
    getLabelsByProject: builder.query({
      query: (projectId) => `/project/${projectId}`,
    }),
    // POST /api/v1/Label
    createLabel: builder.mutation({
      query: (label) => ({
        url: '/',
        method: 'POST',
        body: label,
      }),
    }),
    // PUT /api/v1/Label/{id}
    updateLabel: builder.mutation({
      query: (label) => ({
        url: `/${label.id}`,
        method: 'PUT',
        body: label,
      }),
    }),
    // DELETE /api/v1/Label/{id}
    deleteLabel: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllLabelsQuery,
  useGetLabelByIdQuery,
  useGetLabelsByProjectQuery,
  useCreateLabelMutation,
  useUpdateLabelMutation,
  useDeleteLabelMutation,
} = labelApi;

export default labelApi;