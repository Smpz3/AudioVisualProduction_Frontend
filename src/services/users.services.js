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
        const response = await axios.get(`${baseUrl}/${userID}`);
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

const createMusicFavs = async (values) => {
    try {
        console.log(values);
        const response = await axios.post(`${baseUrl}/profile/favs/audios`, values);
        console.log(response);
        console.log(response.data);
        return JSON.parse(response.config.data)
    } catch (error) {
        return error.message;
    };
};
const createCharFavs = async (values) => {
    try {
        console.log(values);
        // const response = await axios.post(`${baseUrl}/profile/favs/characters`, values);
        // console.log(response);
        // console.log(response.data);
        // return JSON.parse(response.config.data)
    } catch (error) {
        return error.message;
    };
};

const getUserCharacters = async () => {
    try {
        const response = await axios.get(`${baseUrl}/characters`);
        return response.data
    } catch (error) {
        return error.message;
    };
};

const getUserAudios = async () => {
    try {
        const response = await axios.get(`${baseUrl}/audios`);
        return response.data
    } catch (error) {
        return error.message;
    };
};

const getUserShows = async () => {
    try {
        const response = await axios.get(`${baseUrl}/shows`);
        return response.data
    } catch (error) {
        return error.message;
    };
};

const getUserProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/products`);
        return response.data
    } catch (error) {
        return error.message;
    };
};



export {
    getProfile, getById, updateUser, deleteProfile, createMusicFavs, createCharFavs, getUserCharacters, getUserAudios, getUserShows, getUserProducts
}