import Layout from "../layouts";
import { Input } from "@geist-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  //submit the title entered
  const handleInput = e => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/movie-results?name=${name}`)
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Search movies & music" onChange={handleInput} />
      </form>
    </Layout>
  );
};

export default Home;
