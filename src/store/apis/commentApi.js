import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const commentApi = createApi({
  reducerPath: 'commentapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7159/api/v1/comment',
  }),
  endpoints: (builder) => ({
    // GET /api/v1/Comment
    getAllComments: builder.query({
      query: () => '/',
    }),
    // GET /api/v1/Comment/{id}
    getCommentById: builder.query({
      query: (id) => `/${id}`,
    }),
    // GET /api/v1/Comment/duty/{dutyId}
    getCommentsByDuty: builder.query({
      query: (dutyId) => `/duty/${dutyId}`,
    }),
    // GET /api/v1/Comment/author/{authorId}
    getCommentsByAuthor: builder.query({
      query: (authorId) => `/author/${authorId}`,
    }),
    // GET /api/v1/Comment/replyTo/{replyToId}
    getCommentsByReplyTo: builder.query({
      query: (replyToId) => `/replyTo/${replyToId}`,
    }),
    // POST /api/v1/Comment
    createComment: builder.mutation({
      query: (comment) => ({
        url: '/',
        method: 'POST',
        body: comment,
      }),
    }),
    // PUT /api/v1/Comment/{id}
    updateComment: builder.mutation({
      query: (comment) => ({
        url: `/${comment.id}`,
        method: 'PUT',
        body: comment,
      }),
    }),
    // DELETE /api/v1/Comment/{id}
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetCommentByIdQuery,
  useGetCommentsByDutyQuery,
  useGetCommentsByAuthorQuery,
  useGetCommentsByReplyToQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;

export default commentApi;