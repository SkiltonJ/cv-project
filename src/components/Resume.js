import React, { Component } from "react";
import Personal from './Personal';
import Education from './Education';
import Experience from "./Experience";
import Skill from "./Skill";

class Resume extends Component {
  render() {
    return (
      <main>
        <Personal />
        <Education />
        <Experience />
        <Skill />
      </main>
    )
  }
}

export default Resume;
