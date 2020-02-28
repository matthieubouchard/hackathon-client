import React from "react";

import { Link } from "react-router-dom";

function Candidates() {
  return (
    <div>
      <h1>Candidates</h1>
      <Link to="/topics">Topics</Link>
    </div>
  );
}

export default Candidates;