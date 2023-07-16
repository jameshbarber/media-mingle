class SpotifyAPI {
    static baseURL = 'https://api.spotify.com/v1';
    static async search(query) {
        const response = await fetch(`${SpotifyAPI.baseURL}/search?q=${query}&type=track`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('spotifyToken')}`
            }
        });
        const data = await response.json();
        return data.tracks.items;
    }
}

export default SpotifyAPI