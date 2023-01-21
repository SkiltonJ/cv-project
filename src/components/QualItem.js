import React from "react";

const QualItem = (props) => {
  return(
    <div className="qual-card">
      <div className="school-details">
        <h4>{props.data.school}</h4>
        <p>Start/Finish date: {props.data.from} - {props.data.to}</p>
      </div>
      <div className="qual-details">
        <p>Qualification: {props.data.qualification}</p>
      </div>
      <div className='delete-button'>
        <button onClick={() => {props.handleDelete(props.data.id)}}>Delete</button>
      </div>
    </div>
  )
}
export default QualItem;
