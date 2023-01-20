import React from 'react'

const JobItem = (props) => {
  return(
    <div className='job-card'>
      <div>
        <h4>{props.data.company}</h4>
        <p>{props.data.role}</p>
        <p>{props.data.from}-{props.data.to}</p>
      </div>
      <div>
        <p>{props.data.description}</p>
      </div>
      <div className='delete-button'>
        <button onClick={() => {props.handleDelete(props.job)}}>Delete</button>
      </div>
    </div>
  )
}

export default JobItem;
