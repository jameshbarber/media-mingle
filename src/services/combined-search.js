import IMDBApi from "./imdb";
import SpotifyAPI from "./spotify";

class Searcher {

    static async search(query) {
        
        const movies = await IMDBApi.search(query);
        const tracks = await SpotifyAPI.search(query);
        // could add more here

        return {
            movies, 
            tracks
        }
    }
}

export default Searcher