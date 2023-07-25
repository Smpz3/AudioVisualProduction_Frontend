import axios from "axios"

const baseUrl = 'http://localhost:3000/api/audios'

const getAudios = async () => {
    const response = await axios.get(baseUrl);
    return response.data;

}

export { getAudios }