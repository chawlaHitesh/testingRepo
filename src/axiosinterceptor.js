import axios from "axios";

axios.interceptors.request.use(function (config) {
    console.log(config,'request')
    return config;
  }, function (error) {
    console.log(error,"requesteeeeeeeeeee")
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    console.log(response,"response REQ")
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log(error,"response")
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axios