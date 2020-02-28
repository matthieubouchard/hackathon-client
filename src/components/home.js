import React from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const hitApi = async () => {
    const response = await axios("http://localhost:5000/");
    if(response.data.success) {
      alert("success");
    }
  };

  return (
    <div>
      <h1>HOME</h1>
      <Link to="/candidates">Candidates</Link>
      <br/>
      <button onClick={hitApi}>test api</button>
    </div>
  );
}

export default Home;
