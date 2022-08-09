import axios from "axios";

//base url
const instance = axios.create({
    baseURL:'https://fakestoreapi.com/'
});

export default instance;