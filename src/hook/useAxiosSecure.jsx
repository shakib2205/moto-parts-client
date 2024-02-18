import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://moto-parts-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;