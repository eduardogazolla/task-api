import axios from "axios";
export default axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    timeout: 10000,
})

export const API_TASK = axios.create({
    baseURL: "http://localhost:8000/",
    timeout: 10000,
})