import React, { Component } from "react";
import Personal from './Personal';
import Education from './Education';
import Experience from "./Experience";

class Resume extends Component {
  render() {
    return (
      <main>
        <Personal />
        <Education />
        <Experience />
      </main>
    )
  }
}

export default Resume;
