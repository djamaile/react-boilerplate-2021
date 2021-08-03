import React from "react";
import "../../styles/global.css";
import { useQuery } from "react-query";

const Home: React.FC = () => {
  const { data, error, isFetching } = useQuery("/releases/viz");

  if (isFetching) return <p>Is loading...</p>;

  if (error) return <p>${error}</p>;

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
