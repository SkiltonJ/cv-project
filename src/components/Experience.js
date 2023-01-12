import React, { Component } from "react";
import uniqid from 'uniqid';

class Experience extends Component {
  constructor() {
    super()

    this.state = {
      default: {
        id: uniqid,
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
    const {name, value} = e.target;

    this.setState({
      default: {...this.state.default, [name]: value}
    });
  }

  toggleForm = () => {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton
    });
  }

  resetForm = () => {
    this.setState({
      default: {
        ...this.state.default,
        id: uniqid,
        company: '',
        city: '',
        from: '',
        to: '',
        role: '',
        description: ''
      }
    });
  }

  handleAdd = () => {
    this.toggleForm();
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.resetForm();
    this.toggleForm();
  }

  render(){
    const hiddenForm = this.state.activeForm ? "experience-form" : "experience-form hidden"
    const hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

    return(
      <div className='experience'>
        <h3>Work Experience</h3>
        <form className={hiddenForm}>
          <div className="role">
            <label>Job Title</label>
            <input
              type='text'
              name='role'
              placeholder="Web Developer"
              value={this.state.default.role}
              onChange={this.handleChange}
            />
          </div>
          <div className="company">
            <label>Company</label>
            <input
              type='text'
              name='company'
              value={this.state.default.company}
              onChange={this.handleChange}
            />
          </div>
          <div className="from">
            <label>From</label>
            <input
              type='text'
              name='from'
              placeholder='YYYY'
              value={this.state.default.from}
              onChange={this.handleChange}
            />
          </div>
          <div className="to">
            <label>To</label>
            <input
              type='text'
              name='to'
              placeholder='YYYY'
              value={this.state.default.to}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type='text'
              name='city'
              value={this.state.default.city}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description</label><br/>
            <textarea rows='4' cols='50'
              type='text'
              name='description'
              placeholder="Describe your role and achievements in that role here..."
              value={this.state.default.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="buttons">
            <button className="submit">Save</button>
            <button className="cancel" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
        <button className={hiddenButton} onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}

export default Experience;
