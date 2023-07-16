import SpotifySearchCard from "../components/SpotifySearchCard";
import IMDbCard from "../components/IMDbCard";
import styles from "./Home.module.css";
import Layout from "../layouts";

const TitleSection = () => {
  return <div className={styles.mediamingleParent}>
    <b className={styles.mediamingle}>MediaMingle</b>
    <b className={styles.anAppThat}>
      An app that lets you search for music, tweets AND movies!
    </b>
  </div>
}

const Home = () => {

  return (
    <Layout>
      <section className={styles.home}>
        <TitleSection />
        <SpotifySearchCard />
        <IMDbCard />
      </section>
    </Layout>
  );
};

export default Home;
