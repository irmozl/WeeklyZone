import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7159/api/v1/Auth' }),
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      register: builder.mutation({
        query: (user) => ({
          url: '/register',
          method: 'POST',
          body: user,
        }),
      }),
      verifyCode: builder.mutation({
        query: (code) => ({
          url: '/verify-code',
          method: 'POST',
          body: code,
        }),
      }),
      verifyMfa: builder.mutation({
        query: (mfaData) => ({
          url: '/verify-mfa',
          method: 'POST',
          body: mfaData,
        }),
      }),
      forgotPassword: builder.mutation({
        query: (email) => ({
          url: '/forgot-password',
          method: 'POST',
          body: email,
        }),
      }),
      resetPassword: builder.mutation({
        query: (resetData) => ({
          url: '/reset-password',
          method: 'POST',
          body: resetData,
        }),
      }),
      logout: builder.mutation({
        query: () => ({
          url: '/logout',
          method: 'POST',
        }),
      }),
    }),
  });
  
  export const {
    useLoginMutation,
    useRegisterMutation,
    useVerifyCodeMutation,
    useVerifyMfaMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useLogoutMutation,
  } = authApi;
  
  export default authApi;