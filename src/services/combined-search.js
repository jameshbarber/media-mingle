import IMDBApi from "./imdb";

class Searcher {
    static async search(query) {
        const movies = await IMDBApi.search(query);
        return {
            movies
        }
    }
}

export default Searcher