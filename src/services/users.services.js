import axios from "axios"

const baseUrl = 'http://localhost:3000/api/users'

const getProfile = async (values) => {
    try {
        const response = await axios.get(`${baseUrl}/profile`, values);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const getById = async (userID) => {
    try {
        const response = await axios.get(`${baseUrl}/${userID/* .queryKey[1] */}`);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const deleteProfile = async (userID) => {
    try {
        const response = await axios.delete(`${baseUrl}/${userID}`);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const updateUser = async (userID, values) => {
    try {
        const response = await axios.put(`${baseUrl}/update/${userID}`, values);
        return JSON.parse(response.config.data)
    } catch (error) {
        return error.message;
    };
};

export {
    getProfile, getById, updateUser, deleteProfile
}