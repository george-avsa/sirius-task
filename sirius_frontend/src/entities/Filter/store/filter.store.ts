import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, {payload}) => {
            return payload;
        }
    },
})

export const {setFilter} = filter.actions;
export const filterReducer = filter.reducer;