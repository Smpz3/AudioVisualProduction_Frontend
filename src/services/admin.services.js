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

const getUsers = async (values) => {
    try {
        const response = await axios.get(baseUrl, values);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const deleteUser = async (userID) => {
    try {
        const response = await axios.delete(`${baseUrl}/${userID}`);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const isLogged = () => {
    return localStorage.getItem('user_token') ? true : false;
};


export {
    registerUser, loginUser, getUsers, isLogged, deleteUser
}