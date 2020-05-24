import axios from "axios";

const request = axios.create({
    baseURL: "http://192.168.1.8/cem-api"
});

const api = {
    get: async (url) => {
        try{
            const retorno = await request.get(url);

            return retorno.data;
        } catch (error) {
            console.log(error);
        }
    },
    post: async (url, data) => {
        try {
            const retorno = await request.post(url, data);

            return retorno.data;
        } catch (error) {
            console.log(error);    
        }
    }
}

export default api;