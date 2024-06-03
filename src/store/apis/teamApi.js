import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const teamApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7159/api/v1/Team',
  }),
  endpoints: (builder) => ({
    // GET /api/v1/Team
    getAllTeams: builder.query({
      query: () => '/',
    }),
    // GET /api/v1/Team/:id
    getTeamById: builder.query({
      query: (id) => `/${id}`,
    }),
    // POST /api/v1/Team
    createTeam: builder.mutation({
      query: (team) => ({
        url: '/',
        method: 'POST',
        body: team,
      }),
    }),
    // PUT /api/v1/Team/:id
    updateTeam: builder.mutation({
      query: (team) => ({
        url: `/${team.id}`,
        method: 'PUT',
        body: team,
      }),
    }),
    // DELETE /api/v1/Team/:id
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
    // GET /api/v1/Team/manager/:id
    getTeamsByManager: builder.query({
      query: (id) => `/manager/${id}`,
    }),
    // GET /api/v1/Team/project/:id
    getTeamsByProject: builder.query({
      query: (id) => `/project/${id}`,
    }),
    // GET /api/v1/Team/name/:name
    getTeamsByName: builder.query({
      query: (name) => `/name/${name}`,
    }),
    // GET /api/v1/Team/status/:status
    getTeamsByStatus: builder.query({
      query: (status) => `/status/${status}`,
    }),
    // GET /api/v1/Team/priority/:priority
    getTeamsByPriority: builder.query({
      query: (priority) => `/priority/${priority}`,
    }),
  }),
});

export const {
  useGetAllTeamsQuery,
  useGetTeamByIdQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
  useGetTeamsByManagerQuery,
  useGetTeamsByProjectQuery,
  useGetTeamsByNameQuery,
  useGetTeamsByStatusQuery,
  useGetTeamsByPriorityQuery,
} = teamApi;

export default teamApi;
