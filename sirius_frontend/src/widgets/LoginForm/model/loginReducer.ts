import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveTokenStorage } from "App/api/auth-token.service";
import { axiosClassic } from "App/api/interceptors";
import { RootState } from "App/store/store";
import { setUser } from "Entities/User/store/user.store";
import { redirect, redirectDocument } from "react-router-dom";

type InputText = {
    value: string,
    error: null | string,
    errorMessage: string,
    matchString: string,
}

export type FormTypes = 'email' | 'password';

export type LoginSlice = {
    email: InputText,
    password: InputText,
    remindMe: boolean,
    authError: boolean,
    authLoading: boolean,
    authSuccess: boolean,
}

type UserResponseData = {
    id: string,
    createdAt: string,
    updatedAt: string,
    email: string,
    name: string,
}

type AuthResponseData = {
    user: UserResponseData,
    accessToken: string
}

const initialState: LoginSlice = {
    email: {
        value: '',
        error: null,
        errorMessage: 'неправильный email',
        matchString: '([\\w\\.]+@\\w+\\.\\w+)',
        },
    password: {
        value: '',
        error: null,
        errorMessage: 'пароль должен быть не менее 8 символов',
        matchString: '(.{6,})',
    },
    remindMe: false,
    authError: false,
    authLoading: false,
    authSuccess: false,
}

type ChangeValuePayload = {
    id: string,
    value: string,
}

export const loginAuth = createAsyncThunk<AuthResponseData, void, {state: RootState }>(
    'loginForm/auth',
    async (_, {getState, dispatch}) => {
        const {loginForm} = getState();
        const body = {
            email: loginForm.email.value,
            password: loginForm.password.value,
        }
        const response = await axiosClassic.post<AuthResponseData>('http://3073383-ca55064.twc1.net:90/api/auth/login', body);
        const {accessToken} = response.data;
        if (response.status === 200) {
            dispatch(setUser(response.data.user));
        }
        saveTokenStorage(accessToken);
        return response.data;
    },
  )

export const loginFormSlicer = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        changeValue(state, {payload}: PayloadAction<ChangeValuePayload>) {
            const inputOptions = state[payload.id as FormTypes];
            return {
                ...state,
                [payload.id]: {
                    ...inputOptions,
                    value: payload.value,
                    error: null,
                },
            }
        },
        setError(state, {payload}: PayloadAction<FormTypes>) {
            const inputOptions = state[payload as FormTypes];
            return {
                ...state,
                [payload]: {
                    ...inputOptions,
                    error: inputOptions.errorMessage,
                }
            }  
        } 
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginAuth.fulfilled, (state, action) => {
            return {
                ...initialState,
                authSuccess: true,
            };
        })
        builder.addCase(loginAuth.pending, (state, action) => {
            return {
                ...state, 
                authLoading: true, 
                authError: false,
                authSuccess: false,
            };
        })
        builder.addCase(loginAuth.rejected, (state, action) => {
            return {
                ...state,
                authLoading: false,
                authError: true,
                authSuccess: false,
            };
        })
    },
});

export const {changeValue, setError} = loginFormSlicer.actions;
export const servicesReducer =  loginFormSlicer.reducer