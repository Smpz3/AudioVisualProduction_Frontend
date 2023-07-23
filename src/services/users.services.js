import axios from "axios"

const baseUrl = 'http://localhost:3000/api/users/:userID'

const getProfile = async (values) => {
    try {
        const response = await axios.get(`${baseUrl}`, values);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const getById = async (userID) => {
    // return axios.get(`${baseUrl}/${userID}`);
    try {
        const response = await axios.get(`${baseUrl}/${userID}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error.message;
    };
}

export {
    getProfile, getById
}