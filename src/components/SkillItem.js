import React from "react";

const SkillItem = (props) => {
  return(
    <div className="skill-card">
      <div className="skill-name">
        <p>👑 {props.skill}</p>
      </div>
      <div className="delete-button">
        <button onClick={() => {props.handleDelete(props.skill)}}>Delete</button>
      </div>
    </div>
  );
}

export default SkillItem;
