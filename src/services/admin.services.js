import axios from "axios"

const baseUrl = 'http://localhost:3000/api/users/'

const insertUser = async (values) => {
    try {
        const response = await axios.post(`${baseUrl}/register`, values);
        return response.data;
    } catch (error) {
        return error.message;
    };
};

export {
    insertUser
}