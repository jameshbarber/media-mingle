import { useLocation } from "react-router-dom";
import TwitterCard from "./TwitterSearchCard";
import SpotifySearchCard from "./SpotifySearchCard";
import IMDbCard from "./IMDbCard";
import styles from "./Home.module.css";

const Home = () => {
  const location = useLocation();

  return (
    <section className={styles.home}>
      {/* <TwitterCard /> */}
      {location.pathname === "/" && <SpotifySearchCard />}
      {location.pathname === "/" && <IMDbCard />}
      <div className={styles.mediamingleParent}>
        <b className={styles.mediamingle}>MediaMingle</b>
        <b className={styles.anAppThat}>
          An app that lets you search for music, tweets AND movies!
        </b>
      </div>
    </section>
  );
};

export default Home;
