import React, { Component } from 'react';
import SkillItem from './SkillItem';
import uniqid from 'uniqid';

class Skill extends Component {
  constructor(){
    super()

    this.state = {
      skill: '',
      skills: [],
      activeButton: true,
      activeForm: false
    }
  }

  toggleForm = () => {
    this.setState({
     activeForm: !this.state.activeForm,
     activeButton: !this.state.activeButton
    });
  }

  resetForm = () => {
    this.setState({
      skill: ''
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      skills: [...this.state.skills, this.state.skill]
    });
    this.toggleForm();
    this.resetForm();
  }

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value
    });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.toggleForm();
    this.resetForm();
  }

  handleAdd = () => {
    this.toggleForm();
  }

  render(){
    let hiddenButton = this.state.activeButton ? 'button' : 'button hidden'
    let hiddenForm = this.state.activeForm ? 'skill-form' : 'skill-form hidden'

    const displaySkills = this.state.skills.map((skill) => {
      return <div><SkillItem skill={skill} key={uniqid()}/></div>
    });
    return(
      <div>
        <h3>Skills</h3>
        <div>
          {displaySkills}
        </div>

        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div>
            <label>Add a skill</label>
            <input
              name='skill'
              type='text'
              value={this.state.skill}
              onChange={this.handleChange}
            />
          </div>
          <div className='buttons'>
            <button>Save</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
        <button className={hiddenButton} onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default Skill;
