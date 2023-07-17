import axios from "axios";
import Cookies from "js-cookie";

class SpotifyAPI {
    
    static baseURL = 'https://api.spotify.com/v1';
    static AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT
    static CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    static RESPONSE_TYPE = "token"
    static REDIRECT_URI = window.location.origin + "/authorise"

    static getToken() {
        const rs = Cookies.get("spotify_token")
        return rs ?? null
    }

    static getLoginURL() {
        return `${SpotifyAPI.AUTH_ENDPOINT}?client_id=${SpotifyAPI.CLIENT_ID}&redirect_uri=${SpotifyAPI.REDIRECT_URI}&response_type=${SpotifyAPI.RESPONSE_TYPE}`
    }

    static async authorise(token, expiry) {
        Cookies.set("spotify_token", token)
        return token;
    }

    static async search(query) {
        const token = SpotifyAPI.getToken();
        console.log(token)
        try {
            const { data } = await axios.get('https://api.spotify.com/v1/search', {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              params: {
                q: query,
                type: 'track', // Update type to 'track' for searching songs
              },
            });
      
            return data.tracks.items;
          } catch (error) {
            console.log('Error occurred:', error.response.data);
            // Handle the error here (display an error message, etc.)
          }
        
    };
}

export default SpotifyAPI