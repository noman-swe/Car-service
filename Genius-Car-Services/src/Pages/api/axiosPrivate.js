import axios from 'axios';

const axiosPrivate = axios.create({});

// Add a request interceptor
axiosPrivate.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;  
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
        // refresh the token and send to the server for validating
    }
    return Promise.reject(error);
});

export default axiosPrivate;