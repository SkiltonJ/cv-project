import React, { Component } from "react";
import uniqid from "uniqid";
import QualItem from "./QualItem";

class Education extends Component {
  constructor () {
    super()
    this.state = {
      default: {
        id: uniqid,
        school: '',
        from: '',
        to: '',
        qualification: ''
      },
      activeForm: false,
      activeButton: true,
      quals: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      quals: [...this.state.quals, this.state.default]
    })
    this.resetForm()
    this.toggleForm()
  }

  toggleForm = () => {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton
    })
  }

  resetForm = () => {
    this.setState({
      default: {
        ...this.state.default,
        id: uniqid,
        school: '',
        from: '',
        to: '',
        qualification: ''
      }
    })
  }

  handleCancel = (e) => {
    e.preventDefault()
    this.toggleForm()
    this.resetForm()
  }

  handleAdd = () => {
    this.toggleForm()
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      default: {...this.state.default, [name]: value}
    });
  }

  handleDelete = (id) => {
    const filteredQuals = this.state.quals.filter((qual) => {
      return qual.id !== id
    });
    this.setState({
      quals: filteredQuals
    });
  }

  render(){
    let hiddenForm = this.state.activeForm ? "education-form" : "education-form hidden";
    let hiddenButton = this.state.activeButton ? "add-item" : "add-item hidden";

    const displayQuals = this.state.quals.map((qual) => {
      return <QualItem data={qual} key={qual.id} handleDelete={this.handleDelete}/>
    })
    return (
      <div className="education">
        <h3>Education</h3>

        {displayQuals}

        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div className="form">
            <div>
              <label for="school">Educational Institute</label>
            </div>
            <div>
              <input
                type='text'
                name='school'
                placeholder='Enter Here'
                onChange={this.handleChange}
                value={this.state.default.school}
              />
              </div>
            </div>
            <div className="">
              <div>
                <label for='from'>From:</label>
              </div>
              <div>
                <input
                  type='text'
                  name='from'
                  placeholder="YYYY"
                  onChange={this.handleChange}
                  value={this.state.default.from}
                />
              </div>
            </div>
            <div className="">
              <div>
                <label for='to'>To:</label>
              </div>
              <div>
                <input
                  type='text'
                  name='to'
                  placeholder="YYYY"
                  onChange={this.handleChange}
                  value={this.state.default.to}
                />
              </div>
            </div>
            <div>
            <div>
              <labal for='qualification'>Qualification/Degree</labal>
            </div>
            <div>
              <input
                type='text'
                name='qualification'
                placeholder='Bacehlor of Science'
                onChange={this.handleChange}
                value={this.state.default.qualification}
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

export default Education;
