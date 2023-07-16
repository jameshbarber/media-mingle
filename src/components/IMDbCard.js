import { Form } from "react-bootstrap";
import styles from "./IMDbCard.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IMDbCard = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //submit the title entered
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/movie-results?name=${name}`)
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
