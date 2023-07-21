import axios from "axios"

const baseUrl = 'http://localhost:3000/api/users/'

const registerUser = async (values) => {
    try {
        const response = await axios.post(`${baseUrl}/register`, values);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const loginUser = async (values) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, values);
        return response.data;
    } catch (error) {
        return error.message;
    };
};


export {
    registerUser, loginUser
}