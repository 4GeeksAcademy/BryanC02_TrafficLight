import React, { useState } from 'react';

const Home = () => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <div id="TrafficTop">
        <div className="m-auto bg-dark" style={{ width: "25px", height: "200px" }}></div>
      </div>

      <div
        id="container"
        className="bg-dark m-auto rounded-1 d-flex flex-column justify-content-center align-items-center"
        style={{ width: "140px", height: "350px" }}
      >
        <div className={`red-light ${color === "red" ? "selected" : ""}`} onClick={() => setColor("red")}>
          <i className="fa-solid fa-circle fa-6x mb-3" style={{ color: "#bd1414" }}></i>
        </div>
        <div className={`yellow-light ${color === "yellow" ? "selected" : ""}`} onClick={() => setColor("yellow")}>
          <i className="fa-solid fa-circle fa-6x mb-3" style={{ color: "#FFD43B" }}></i>
        </div>
        <div className={`green-light ${color === "green" ? "selected" : ""}`} onClick={() => setColor("green")}>
          <i className="fa-solid fa-circle fa-6x" style={{ color: "#129009" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Home;