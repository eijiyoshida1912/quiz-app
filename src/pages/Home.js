import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>クイズアプリ</h1>
      <button>
        <Link to="name">はじめる</Link>
      </button>
    </>
  );
};

export default Home;
