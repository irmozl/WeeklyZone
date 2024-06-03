import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const dutyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7159/api/v1/duty',
  }),
  endpoints: (builder) => ({
    // GET /api/v1/Duty
    getAllDuties: builder.query({
      query: () => '/',
    }),
    // GET /api/v1/Duty/{id}
    getDutyById: builder.query({
      query: (id) => `/${id}`,
    }),
    // GET /api/v1/Duty/user/{userId}
    getDutiesByUser: builder.query({
      query: (userId) => `/user/${userId}`,
    }),
    // GET /api/v1/Duty/title/{title}
    getDutiesByTitle: builder.query({
      query: (title) => `/title/${title}`,
    }),
    // GET /api/v1/Duty/project/{projectId}
    getDutiesByProject: builder.query({
      query: (projectId) => `/project/${projectId}`,
    }),
    // GET /api/v1/Duty/status/{status}
    getDutiesByStatus: builder.query({
      query: (status) => `/status/${status}`,
    }),
    // GET /api/v1/Duty/priority/{priority}
    getDutiesByPriority: builder.query({
      query: (priority) => `/priority/${priority}`,
    }),
    // GET /api/v1/Duty/reporter/{reporterId}
    getDutiesByReporter: builder.query({
      query: (reporterId) => `/reporter/${reporterId}`,
    }),
    // GET /api/v1/Duty/assignee/{assigneeId}
    getDutiesByAssignee: builder.query({
      query: (assigneeId) => `/assignee/${assigneeId}`,
    }),
    // GET /api/v1/Duty/dutyType/{dutyType}
    getDutiesByDutyType: builder.query({
      query: (dutyType) => `/dutyType/${dutyType}`,
    }),
    // GET /api/v1/Duty/label/{labelId}
    getDutiesByLabel: builder.query({
      query: (labelId) => `/label/${labelId}`,
    }),
    // POST /api/v1/Duty
    createDuty: builder.mutation({
      query: (duty) => ({
        url: '/',
        method: 'POST',
        body: duty,
      }),
    }),
    // PUT /api/v1/Duty/{id}
    updateDuty: builder.mutation({
      query: (duty) => ({
        url: `/${duty.id}`,
        method: 'PUT',
        body: duty,
      }),
    }),
    // DELETE /api/v1/Duty/{id}
    deleteDuty: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllDutiesQuery,
  useGetDutyByIdQuery,
  useGetDutiesByUserQuery,
  useGetDutiesByTitleQuery,
  useGetDutiesByProjectQuery,
  useGetDutiesByStatusQuery,
  useGetDutiesByPriorityQuery,
  useGetDutiesByReporterQuery,
  useGetDutiesByAssigneeQuery,
  useGetDutiesByDutyTypeQuery,
  useGetDutiesByLabelQuery,
  useCreateDutyMutation,
  useUpdateDutyMutation,
  useDeleteDutyMutation,
} = dutyApi;

export default dutyApi;