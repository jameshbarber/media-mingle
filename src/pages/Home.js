import SpotifySearchCard from "../components/SpotifySearchCard";
import IMDbCard from "../components/IMDbCard";
import Layout from "../layouts";
import { Grid } from "@geist-ui/core";

const Home = () => {
  return (
    <Layout>
      <Grid.Container>
        <Grid xs={24} md={12}>
          <SpotifySearchCard />
        </Grid>
        <Grid xs={24} md={12}>
          <IMDbCard />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default Home;
