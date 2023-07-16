import SpotifySearchCard from "../components/SpotifySearchCard";
import IMDbCard from "../components/IMDbCard";
import Layout from "../layouts";

const Home = () => {
  return (
    <Layout>
      <SpotifySearchCard />
      <IMDbCard />
    </Layout>
  );
};

export default Home;
