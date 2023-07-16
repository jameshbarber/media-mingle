import { Form } from "react-bootstrap";
import styles from "./IMDbCard.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=caa27cea";

const IMDbCard = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //get response from API
  const getInfo = () => {
    axios.get(api_url + `&s=${name}` + "&type=movie" + "&page=1").then((res) => {
      if (res.data.Search) {
        const moviesData = JSON.stringify(res.data.Search);
        navigate(`/movie-results?movies=${moviesData}`);
      }
    });
  };

  //submit the title entered
  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo();
  };

  return (
    <div>
      <section className={styles.imdbcard} id="IMDbSection">
        <img className={styles.imdblogoIcon} alt="" src="/imdblogo@2x.png" />
        <div className={styles.imdbcardInner}>
          <div className={styles.imdbinputParent}>
            <div className={styles.imdbinput}>
              <button className={styles.imdbbutton} onClick={(e) => handleSubmit(e)}>
                <b className={styles.go}>GO</b>
              </button>
              <Form.Group
                className={styles.wrapper}
                name="name"
                placeholder="movie name"
                onChange={(e) => setName(e.target.value)}
              >
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <b className={styles.searchForA}>Search for a movie:</b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IMDbCard;
