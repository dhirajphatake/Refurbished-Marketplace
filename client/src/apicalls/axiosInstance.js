import axios from 'axios';
export const axiosInstance = axios.create({
    // headers use to send with all apis
    headers : {
         authorization : `Bearer ${localStorage.getItem('token')}`
    }
})
