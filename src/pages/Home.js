import SpotifySearchCard from "../components/SpotifySearchCard";
import IMDbCard from "../components/IMDbCard";
import styles from "./Home.module.css";

const Home = () => {

  return (
    <section className={styles.home}>
      <div className={styles.mediamingleParent}>
        <b className={styles.mediamingle}>MediaMingle</b>
        <b className={styles.anAppThat}>
          An app that lets you search for music, tweets AND movies!
        </b>
      </div>
      <SpotifySearchCard />
      <IMDbCard />
    </section>
  );
};

export default Home;
