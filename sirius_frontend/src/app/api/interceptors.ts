import axios, {CreateAxiosDefaults} from 'axios';
import { getAccessToken, removeFromStorage } from './auth-token.service';
import { errorCatch } from './error';
import { authService } from './auth.service';

const options: CreateAxiosDefaults = {
    baseURL: 'http://3073383-ca55064.twc1.net:90/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
}

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
    const accessToken = getAccessToken();

    if (config?.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

axiosWithAuth.interceptors.response.use(
    config => config, 
    async error => {
        const originalRequest = error.config;

        if ((error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
                error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                await authService.getNewToken();
                return axiosWithAuth.request(originalRequest);
            } catch(error) {
                if (errorCatch(error) === 'jwt expired') {
                    removeFromStorage(); 
                    throw new Error('Failed to get new access token');
                }
            }
        } 

        throw error;
    }
)

export {axiosClassic, axiosWithAuth};