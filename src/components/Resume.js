import React, { Component } from "react";
import Personal from './Personal';
import Education from './Education';

class Resume extends Component {
  render() {
    return (
      <main>
        <Personal />
        <Education />
      </main>
    )
  }
}

export default Resume;
