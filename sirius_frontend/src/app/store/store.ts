import { configureStore } from "@reduxjs/toolkit";
import { servicesReducer } from "Widgets/LoginForm/model/loginReducer";

const rootReducer = {
    loginForm: servicesReducer,
}

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;