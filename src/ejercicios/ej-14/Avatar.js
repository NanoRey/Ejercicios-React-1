import React from 'react';

function Avatar(props) {
  return <div 
      style={{border: '2px solid #000'}}>
      <p>{props.user} - {props.order}</p>
    </div>;
}

export default Avatar;