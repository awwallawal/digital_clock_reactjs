import React from 'react'

function LocalTime({ localtime }) {
  return (
    <div className='localTime'>
      <p> {localtime} </p>
    </div>
  )
}

LocalTime.defaultProps = {
 localtime: 'LocalTime'
}

export default LocalTime
