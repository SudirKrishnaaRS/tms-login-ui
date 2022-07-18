import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZ2dAZ21haWwuY29tIiwiZXhwIjoxNjU4MTc4MTUyLCJpYXQiOjE2NTgxNjAxNTJ9.nFid5489PPDLgX9WTnkPS3KiD8we9nBYbA89a-alulNVPcLde3-MEp13zEEC3iBlPrMQ0WBRE0uC0U_v6-RE7g";

export default axios.create({
    baseURL: BASE_URL
});


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{
        Authorization: `Bearer ${token1}`,
    }
   
});