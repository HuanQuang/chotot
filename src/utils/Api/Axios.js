import axios from 'axios';
const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://server-cho-tot.vercel.app/api/',
    // headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') },
});

AxiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
export default AxiosClient;
