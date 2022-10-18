import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.tvmaze.com/'
});

export default axiosInstance;