import React from "react";
import "../../styles/home.css";
import { useQuery } from "react-query";
import { Header } from "../../components";

const Home = () => {
  const { data, error, isFetching } = useQuery(["GET", "/character", {}]);

  if (isFetching) return <p>Is loading...</p>;

  if (error) return <p>${error}</p>;

  console.log(data);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default Home;
