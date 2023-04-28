import axios from 'axios';

/**
 * Creates an Axios instance with specified configuration options.
 *
 * @typedef {Object} AxiosInstance
 * @property {function} request - The Axios request method.
 * @property {function} get - The Axios GET method.
 * @property {function} delete - The Axios DELETE method.
 * @property {function} head - The Axios HEAD method.
 * @property {function} post - The Axios POST method.
 * @property {function} put - The Axios PUT method.
 * @property {function} patch - The Axios PATCH method.
 *
 * @typedef {Object} AxiosRequestConfig
 * @property {string} url - The request URL.
 * @property {string} method - The HTTP request method.
 * @property {Object} params - The URL query parameters.
 * @property {Object} data - The request body data.
 *
 * @typedef {Object} AxiosResponse
 * @property {Object} data - The response data.
 * @property {number} status - The response status code.
 * @property {string} statusText - The response status text.
 * @property {Object} headers - The response headers.
 * @property {AxiosRequestConfig} config - The request configuration.
 *
 * @typedef {Object} AxiosError
 * @property {Object} response - The response data (if any).
 * @property {number} status - The response status code (if any).
 * @property {string} statusText - The response status text (if any).
 * @property {Object} headers - The response headers (if any).
 * @property {AxiosRequestConfig} config - The request configuration.
 * @property {string} message - The error message.
 *
 * @returns {AxiosInstance} The Axios instance with interceptors.
 */
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 5000,
});

/**
 * Adds a request interceptor to the Axios instance.
 *
 * @param {function} onFulfilled - The callback function to handle the fulfilled request.
 * @param {function} onRejected - The callback function to handle the rejected request.
 * @returns {number} The interceptor ID.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any headers or modify request config here
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  },
);

/**
 * Adds a response interceptor to the Axios instance.
 *
 * @param {function} onFulfilled - The callback function to handle the fulfilled response.
 * @param {function} onRejected - The callback function to handle the rejected response.
 * @returns {number} The interceptor ID.
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Add any response data handling or modification here
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  },
);

export default axiosInstance;
