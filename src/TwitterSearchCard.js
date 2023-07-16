import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import styles from './TwitterCard.module.css';

const TwitterCard = () => {
  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState([]);
  const [numberOfTweets, setNumberOfTweets] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/twitter/user/${username}/tweets?count=${numberOfTweets}`);
      const tweetsData = response.data;
      setTweets(tweetsData);
    } catch (error) {
      // Handle any errors
      console.log('Error occurred:', error);
    }
  };

  return (
    <section className={styles.twittercard} id="TwitterSection">
      <div className={styles.frameParent}>
        <div className={styles.searchForAUsersTweetsWrapper}>
          <b className={styles.searchForA}>Search for a user's tweets:</b>
        </div>
        <Form.Group className={styles.twitterinputFormgroup}>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="TwitterUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <img
          className={styles.twitterLogoIcon}
          alt=""
          src="/twitterlogo@2x.png"
        />
      </div>
      <div className={styles.frameGroup}>
        <Form.Group className={styles.numberOfTweetsParent}>
          <Form.Label>Number of tweets:</Form.Label>
          <Form.Control
            type="text"
            value={numberOfTweets}
            onChange={(e) => setNumberOfTweets(e.target.value)}
          />
        </Form.Group>
        <button className={styles.twitterbutton} onClick={handleSearch}>
          <b className={styles.go}>GO</b>
        </button>
      </div>

      {tweets.length > 0 && (
        <div>
          <h3>Tweets:</h3>
          <ul>
            {tweets.map((tweet) => (
              <li key={tweet.id}>{tweet.text}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default TwitterCard;
