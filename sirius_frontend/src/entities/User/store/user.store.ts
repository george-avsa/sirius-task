import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth } from "App/api/interceptors";
import { RootState } from "App/store/store";

type User = {
    loginFailed: boolean,
    loginInProcess: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
    email: string,
    name: string
}

const initialState: User = {
    loginFailed: false,
    loginInProcess: false,
    id: '',
    createdAt: '',
    updatedAt: '',
    email: '',
    name: '',
};

export const fetchUserProfile = createAsyncThunk<User, void, {state: RootState}>(
    'user/fetchUserProfile',
    async () => {
        const response = await axiosWithAuth.get('http://3073383-ca55064.twc1.net:90/api/user/check');
        
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
        },
        setIsInProcess(state, action) {
            return {
                ...state,
                loginInProcess: true,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.fulfilled, (state, {payload}) => {
                return {
                    ...payload,
                    loginInProcess: false,
                };
            })
            .addCase(fetchUserProfile.rejected, (state, {payload}) => {
                return {
                    ...initialState, 
                    loginFailed: true,
                    loginInProcess: false,
                }
            })
    }
});

export const {setUser} = userSlice.actions;
export const userReducer = userSlice.reducer;