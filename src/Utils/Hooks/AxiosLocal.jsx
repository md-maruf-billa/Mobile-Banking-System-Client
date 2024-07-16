import axios from 'axios';
import React from 'react';

const useAxiosLocal = () => {

    const axiosGlobal = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
    })
    return axiosGlobal;

};

export default useAxiosLocal;