import { AuthForm } from "App/types/auth.types";
import { axiosClassic } from "./interceptors";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

export const authService = {
    async main(type: 'login' | 'register', data: AuthForm) {
        const response = await axiosClassic.post(
            `auth/${type}`,
            data
        );
        
        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }

        return response;
    },

    async getNewToken() {
        const response = await axiosClassic.post(
            `auth/login/access-token`,
        )

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }

        return response;
    },

    async logout() {
        const response = await axiosClassic.post('auth/logout');

        if (response.data) {
            removeFromStorage();
        }

        return response;
    }
}