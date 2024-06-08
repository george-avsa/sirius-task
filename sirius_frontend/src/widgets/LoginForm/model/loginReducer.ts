import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveTokenStorage } from "App/api/auth-token.service";
import { axiosClassic } from "App/api/interceptors";
import { RootState } from "App/store/store";

type InputText = {
    value: string,
    error: null | string,
    errorMessage: string,
}

type LoginSlice = {
    email: InputText,
    password: InputText,
    remindMe: boolean,
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
        value: 'неправильный email',
        error: null,
        errorMessage: 'неправильный email',
        },
    password: {
        value: '',
        error: null,
        errorMessage: 'пароль должен быть не менее 8 символов'
    },
    remindMe: false,
}

type ChangeValuePayload = {
    id: string,
    value: string,
}

export const loginAuth = createAsyncThunk<AuthResponseData, void, {state: RootState }>(
    'loginForm/auth',
    async (_, {getState}) => {
        const {loginForm} = getState();
        const body = {
            email: loginForm.email.value,
            password: loginForm.password.value,
        }
        const response = await axiosClassic.post<AuthResponseData>('http://localhost:4200/api/auth/login', body);
        const {accessToken} = response.data;
        saveTokenStorage(accessToken);
        return response.data
    },
  )

export const loginFormSlicer = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        changeValue(state, {payload}: PayloadAction<ChangeValuePayload>) {
            return {
                ...state,
                [payload.id]: payload.value,
            }
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginAuth.fulfilled, (state, action) => {
            // Add user to the state array
            // state.entities.push(action.payload)
        })
    },
});

export const {changeValue} = loginFormSlicer.actions;
export const servicesReducer =  loginFormSlicer.reducer