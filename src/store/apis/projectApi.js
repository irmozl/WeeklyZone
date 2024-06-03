import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const projectApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7159/api/v1/project',
    }),
    // query çekmek için mutation değiştermek, silmek, oluşturmak için
    endpoints: (builder) => ({
        // GET /api/v1/Project
        getAllProjects: builder.query({
            query: () => `/` //'Project' ya da `/Project` olabilir denenicek
        }),
        // GET /api/v1/Project/{id}
        getProjectById: builder.query({
            query: (id) => `/${id}`
        }),
            // GET /api/v1/Project/manager/{id}
        getProjectsByManager: builder.query({
            query: (managerId) => `/manager/${managerId}`,
        }),
        // GET /api/v1/Project/status/{status}
        getProjectsByStatus: builder.query({
            query: (status) => `/status/${status}`,
        }),
        // GET /api/v1/Project/priority/{priority}
        getProjectsByPriority: builder.query({
            query: (priority) => `/priority/${priority}`,
        }),
        // GET /api/v1/Project/duty/{id}
        getProjectsByDuty: builder.query({
            query: (dutyId) => `/duty/${dutyId}`,
        }),
        // GET /api/v1/Project/due/{date}
        getProjectsByDueDate: builder.query({
            query: (date) => `/due/${date}`,
        }),
        // GET /api/v1/Project/start/{date}
        getProjectsByStartDate: builder.query({
            query: (date) => `/start/${date}`,
        }),
        // GET /api/v1/Project/name/{name}
        getProjectsByName: builder.query({
            query: (name) => `/name/${name}`,
        }),
        // PUT /api/v1/Project
        updateProject: builder.mutation({
            query: (project) => ({
            url: '/',
            method: 'PUT',
            body: project,
            }),
        }),
        // POST /api/v1/Project
        createProject: builder.mutation({
            query: (project) => ({
            url: '/',
            method: 'POST',
            body: project,
            }),
        }),
        // DELETE /api/v1/Project/{id}
        deleteProject: builder.mutation({
            query: (id) => ({
            url: `/${id}`,
            method: 'DELETE',
            }),
        }),
        
        
    }),
})

export const {
    useGetAllProjectsQuery,
    useGetProjectByIdQuery,
    useGetProjectsByManagerQuery,
    useGetProjectsByStatusQuery,
    useGetProjectsByPriorityQuery,
    useGetProjectsByDutyQuery,
    useGetProjectsByDueDateQuery,
    useGetProjectsByStartDateQuery,
    useGetProjectsByNameQuery,
    useUpdateProjectMutation,
    useCreateProjectMutation,
    useDeleteProjectMutation,
  } = projectApi
  
  export default projectApi
  