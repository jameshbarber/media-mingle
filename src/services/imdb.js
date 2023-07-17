import axios from "axios";

class IMDBApi {
    static baseURL = "http://www.omdbapi.com/?i=tt3896198&apikey=caa27cea";
    
    static async search(id) {
        const response = await axios.get(`${IMDBApi.baseURL}&s=${id}&type=movie&page=1`);
        const data = response?.data
        return data?.Search;
    }
}


export default IMDBApi