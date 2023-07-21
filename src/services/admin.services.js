import axios from "axios"

const baseUrl = 'http://localhost:3000/api/users/register'

const insertUser = async (values) => {
    try {
        const response = await axios.post(baseUrl, values);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

export {
    insertUser
}