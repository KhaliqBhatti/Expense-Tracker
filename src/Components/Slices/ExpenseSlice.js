import { createSlice } from "@reduxjs/toolkit";


const ExpenseSlice  = createSlice({
    name:'expense',
    initialState:{
        data:[],
        error:null
    },

})
export const {isLoading,isSucces,isError}= ExpenseSlice.actions
export default ExpenseSlice.reducer