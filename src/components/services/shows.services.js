import axios from "axios"

const baseUrl = 'http://localhost:3000/api/shows'

const getShows = async () => {
    const response = await axios.get(baseUrl); 
    return response.data; 

}

export{ getShows }