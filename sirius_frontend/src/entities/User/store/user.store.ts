import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "App/api/interceptors";
import { RootState } from "App/store/store";

type User = {
    id: string,
    createdAt: string,
    updatedAt: string,
    email: string,
    name: string
}

const initialState: User = {
    id: '',
    createdAt: '',
    updatedAt: '',
    email: '',
    name: '',
};

export const fetchUserProfile = createAsyncThunk<User, void, {state: RootState}>(
    'user/fetchUserProfile',
    async () => {
        const response = await axiosWithAuth.get('http://localhost:4200/api/user/check');
        
        // not to store password
        const {password, ...user} = response.data;
        return user;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            return {
                ...action.payload
            };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.fulfilled, (state, {payload}) => {
                return {...payload};
            })
    }
});

export const {setUser} = userSlice.actions;
export const userReducer = userSlice.reducer;