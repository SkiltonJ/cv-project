import React, { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
  constructor() {
    super()

    this.state = {
      default: {
        company: '',
        city: '',
        from: '',
        to: '',
        role: '',
        description: ''
      },
      jobs: [],
      activeForm: false,
      activeButton: true
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({
      default: {...this.state.default, [name]: value}
    })
  }

  render(){
    const hiddenForm = this.state.activeForm ? "experience-form" : "experience-form hidden"
    const hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

    return(
      <div className='experience'>
        <h3>Work Experience</h3>
        <form className={hiddenForm}>
          <div className="form">
            <label>Job Title</label>
            <input
              type='text'
              name='company'
              placeholder="Web Developer"
              value={this.state.default.company}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
