import React from "react";
import EditableLabel from "./EditableLabel";

const Personal = () => {
  return (
    <div className="flex personal">
        <div className="personal-left">
          <EditableLabel value='First Name' tag='h1' />
          <EditableLabel value='Last Name' tag='h1' />
          <EditableLabel value='Occupation' tag='h4' />
          <EditableLabel value='Email' tag='h4' />
        </div>

        <div className="personal-right">
          <EditableLabel value='Address line 1' tag='p' />
          <EditableLabel value='Address line 2' tag='p' />
          <EditableLabel value='Town/City' tag='p' />
          <EditableLabel value='Country' tag='p' />
          <EditableLabel value='Postcode' tag='p' />
        </div>
    </div>
  )
}

export default Personal;
