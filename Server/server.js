const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Twit = require('twit'); // Import the Twit package
const app = express();
const port = 3001;

app.use(cors());

// Create a new Twit instance with your Twitter API credentials
const twitterClient = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET_KEY,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });
  


// Define a route for handling the Twitter API request
app.get('/api/twitter/user/:username/tweets', (req, res) => {
  const { username } = req.params;
  const { count } = req.query;

  // Use the Twit client to make the API request to retrieve user's tweets
  twitterClient.get(
    '2/users/by/username/:username/tweets',
    { screen_name: username, count },
    (err, data, response) => {
      if (err) {
        console.log('Error occurred:', err);
        res.status(500).json({ error: 'Error occurred while fetching tweets' });
      } else {
        const tweets = data.map((tweet) => ({
          id: tweet.id_str,
          text: tweet.text,
        }));
        res.json(tweets);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
