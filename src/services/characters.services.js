import axios from "axios"

const baseUrl = 'http://localhost:3000/api/characters/'

const getCharacters = async () => {

    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

export { getCharacters }