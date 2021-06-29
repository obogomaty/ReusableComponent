import React from 'react'

const History = ({text, onClicked, onbodyClick}) => {
  return (
    <div className='history' onClick = {onbodyClick}>
      <span className='history-text'>{text}</span>
      <span className='history-icon' onClick={(e) => {
        e.stopPropagation()
      onClicked()
      }}>x</span>
    </div>
  )
}

export default History
