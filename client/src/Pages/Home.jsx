import React from "react";
import Header from "../Components/Header";
import Courosel from "../Components/Courosel";


const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center "
        style={{ backgroundImage: `url(./assests/introbg.svg)` }}
      >
        <div>
          <h1>Ariya Das</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>Enthusiastic and skilled<br></br> MERN stack developer </p>
            <button className="primary-button font-bold ">Get Started</button>
          </div>
        </div>
      </div>

      <Courosel />
    </div>
  );
}

export default Home;
