import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Searcher(props) {
  const [searchKey, setSearchKey] = useState('');
  const [tracks, setTracks] = useState([]);

  const access_token = props.token;

  const searchSong = async () => {
    try {
      const { data } = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
        params: {
          q: searchKey,
          type: 'track', // Update type to 'track' for searching songs
        },
      });

      setTracks(data.tracks.items);
    } catch (error) {
      console.log('Error occurred:', error.response.data);
      // Handle the error here (display an error message, etc.)
    }
  };

  return (
    <>
      <div className="SearchForm">
        <input
          className="Name"
          type="text"
          placeholder="Search By Song Name ..."
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <button onClick={searchSong}>Search</button>
      </div>
      {tracks.slice(0, 5).map((track) => (
        <div key={track.id}>
          <ul>
            <li> {track.name}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Searcher;
