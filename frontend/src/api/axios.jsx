import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {

            if (error.response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        }
        return Promise.reject(error);
    }
);


export const LoginUser = (userData) => {
    return api.post("/auth/login", userData);
};

export const SignupUser = (userData) => {
    return api.post("/auth/signup", userData);
};

export default api;
