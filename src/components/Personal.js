import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <form>
          <div className="flex-col">
            <input placeholder="First Name" type='text'></input>
            <input placeholder="Last Name" type='text'></input>
            <input placeholder="Occupation" type='text'></input>
            <input placeholder="Email" type='text'></input>
          </div>


        </form>
      </div>
    )
  }
}

export default Personal;
