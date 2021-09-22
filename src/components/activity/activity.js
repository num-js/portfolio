import React from 'react';
import './activity.scss'

const Activity = ({icon,inactive}) => {
  let imgURL = "/icons/"+icon
  return(
    <div style={{backgroundImage: "url("+imgURL+")"}} className="activity-bg">
      <div className={`status ${inactive? 'inactive':null}`}>

      </div>
    </div>
  )
}
export default Activity;