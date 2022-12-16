import axios from 'axios';

const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
});
export default AxiosClient;
