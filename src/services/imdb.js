class IMDBApi {
    static baseURL = "http://www.omdbapi.com/?i=tt3896198&apikey=caa27cea";
    static async search(id) {
        const response = await fetch(`${IMDBApi.baseURL}&s=${id}&type=movie&page=1`);
        const data = await response.json();
        return data.Search;
    }
}

export default IMDBApi