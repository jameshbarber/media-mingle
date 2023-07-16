import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import styles from './SpotifySearchCard.module.css';
import Searcher from './components/Searcher';

const SpotifySearchCard = () => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;

  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (hash && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  const handleSearch = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  };

  return (
    <section className={styles.spotifycard} id="SpotifySection">
      <img className={styles.spotifyLogoIcon} alt="" src="/spotifylogo@2x.png" />
      <div className={styles.searchForASongWrapper}>
        <b className={styles.searchForA}>Search for a song:</b>
      </div>
      <div className={styles.spotifyinputParent}>
        {!token ? (
          <div>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
              Login to Spotify
            </a>
            <button className={styles.spotifybutton} onClick={handleSearch}>
              <b className={styles.go}>GO</b>
            </button>
          </div>
        ) : (
          <React.Fragment>
            <Searcher token={token} />
            <button className="logOut" onClick={logout}>
              Logout
            </button>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default SpotifySearchCard;
