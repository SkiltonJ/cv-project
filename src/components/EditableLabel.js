import React, { Component } from "react";

class EditableLabel extends Component {
  constructor(props){
    super(props)

    this.state ={
      text: props.value,
      isEditing: false,
      tag: props.tag,
      default: props.value
    }
  }
}
