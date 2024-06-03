import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7159/api/v1/User',
  }),
  endpoints: (builder) => ({
    // GET /api/v1/User
    getAllUsers: builder.query({
      query: () => '/',
    }),
    // GET /api/v1/User/{id}
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
    // GET /api/v1/User/role/{role}
    getUsersByRole: builder.query({
      query: (role) => `/role/${role}`,
    }),
    // GET /api/v1/User/username/{username}
    getUsersByUsername: builder.query({
      query: (username) => `/username/${username}`,
    }),
    // GET /api/v1/User/email/{email}
    getUsersByEmail: builder.query({
      query: (email) => `/email/${email}`,
    }),
    // GET /api/v1/User/phone/{phone}
    getUsersByPhone: builder.query({
      query: (phone) => `/phone/${phone}`,
    }),
    // POST /api/v1/User
    createUser: builder.mutation({
      query: (user) => ({
        url: '/',
        method: 'POST',
        body: user,
      }),
    }),
    // PUT /api/v1/User/{id}
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/${user.id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    // DELETE /api/v1/User/{id}
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUsersByRoleQuery,
  useGetUsersByUsernameQuery,
  useGetUsersByEmailQuery,
  useGetUsersByPhoneQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
