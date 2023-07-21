import axios from "axios"

const baseUrl = 'http://localhost:3000/api/store/'

const getProducts = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const orderByLowerPrice = async () => {
    try {
        const response = await axios.get(`${baseUrl}/order/desc`);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const orderByHigherPrice = async () => {
    try {
        const response = await axios.get(`${baseUrl}/order/asc`);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

export {
    getProducts, orderByLowerPrice, orderByHigherPrice
}