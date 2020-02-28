import React from "react";

import { ppl } from "./people";

import { Link } from "react-router-dom";

const imageStyles = {
  width: "150px",
  borderRadius: "50%"
};

const containerStyles = {
  marginTop: "200px"
};

const candidateStyles = {
  display: "inline-flex ",
  justifyContent: 'space-around',
  width: '85%',
}

console.log("peoppe?", ppl);
function Candidate({ candidate }) {
  console.log("CANDIDATE", candidate);

  return (
    <div style={containerStyles}>
      <img
        style={imageStyles}
        className="person"
        src={candidate.img}
        alt="candidate"
      />
      <label>{candidate.name}</label>
    </div>
  );
}

class Candidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: []
    }
  }

  selectPerson = (e) => {
    console.log('e', e)



  }

  render() {
    return (
      <div>
        <div className="candidates" style={candidateStyles}>
          {ppl.length && ppl.map(person => <Candidate onClick={this.selectPerson}  key={person.name} candidate={person} />)}
        </div>

        <h1>Candidates</h1>
        <Link to="/topics">Topics</Link>
      </div>
    );
  }
}

export default Candidates;
