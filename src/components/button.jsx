import React from 'react'

const Button = (props) => {
const {color, width, text, afterClick , bgcolor, btnStyle} = props;

  return (
    <button 
    onClick={afterClick}
    style={{
      padding: '10px 5px', 
      borderRadius: '10px',
      color,
      width,
      backgroundColor: bgcolor || 'bisque',
      cursor: 'pointer',
      ...btnStyle
    }}
    >
      {text || 'Submit'}
    </button>
  )
}

export default Button
