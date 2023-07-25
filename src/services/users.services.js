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
    console.log(userID);
    // return axios.get(`${baseUrl}/${userID}`);
    try {
        const response = await axios.get(`${baseUrl}/${userID/* .queryKey[1] */}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

const updateUser = async (userID, values) => {
    try {
        const response = await axios.put(`${baseUrl}/update/${userID}`, values);
        console.log(response);
        console.log(JSON.parse(response.config.data));
        return JSON.parse(response.config.data)
    } catch (error) {
        return error.message;
    };
};

export {
    getProfile, getById, updateUser
}