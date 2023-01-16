import React, { Component } from "react";
import uniqid from 'uniqid';
import JobItem from "./JobItem";

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      jobs: [...this.state.jobs, this.state.default]
    });
    this.resetForm();
    this.toggleForm();
  }

  render(){
    let hiddenForm = this.state.activeForm ? "experience-form" : "experience-form hidden"
    let hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden"

    const displayJobs = this.state.jobs.map((job) => {
      return <JobItem data={job} key={job.id} />
    })
    return(
      <div className='experience'>
        <h3>Work Experience</h3>
        {displayJobs}
        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div className="role">
            <div>
              <label>Job Title</label>
            </div>
            <div>
              <input
                type='text'
                name='role'
                placeholder="Web Developer"
                value={this.state.default.role}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="company">
            <div>
              <label>Company</label>
            </div>
            <div>
              <input
                type='text'
                name='company'
                value={this.state.default.company}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="from">
            <div>
              <label>From</label>
            </div>
            <div>
              <input
                type='text'
                name='from'
                placeholder='YYYY'
                value={this.state.default.from}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="to">
            <div>
              <label>To</label>
            </div>
            <div>
              <input
                type='text'
                name='to'
                placeholder='YYYY'
                value={this.state.default.to}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>City</label>
            </div>
            <div>
              <input
                type='text'
                name='city'
                value={this.state.default.city}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Description</label><br/>
            </div>
            <div>
              <textarea rows='4' cols='50'
                type='text'
                name='description'
                placeholder="Describe your role and achievements in that role here..."
                value={this.state.default.description}
                onChange={this.handleChange}
              />
            </div>
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
