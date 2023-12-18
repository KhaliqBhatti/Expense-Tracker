import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "ApiSlice",
  tagTypes: ["expensesdetail", "incomedetail", "balancedetail"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-server-zrdt.onrender.com/",
  }),

  endpoints: (builder) => ({
    GetExpense: builder.query({
      query: () => ({
        url: "expenses",
        method: "GET",
      }),
      providesTags: ["expensesdetail"],
    }),
    createExpense: builder.mutation({
      query: (newExpense) => {
        return {
          url: "expenses",
          method: "POST",
          body: newExpense,
        };
      },
      invalidatesTags: ["expensesdetail"],
    }),

    GetIncome: builder.query({
      query: () => ({
        url: "income",
        method: "GET",
      }),
      providesTags: ["incomedetail"],
    }),
    createIncome: builder.mutation({
      query: (newIncome) => ({
        url: "income",
        method: "POST",
        body: newIncome,
      }),
      invalidatesTags: ["incomedetail"],
    }),
    delIncome: builder.mutation({
      query: (id) => ({
        url: `income/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["incomedetail"],
    }),
    delExpense: builder.mutation({
      query: (id) => ({
        url: `expenses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["expensesdetail"],
    }),
  }),
});

export const {
  useGetExpenseQuery,
  useCreateExpenseMutation,
  useGetIncomeQuery,
  useCreateIncomeMutation,
  useDelIncomeMutation,
  useDelExpenseMutation,
} = Api;
