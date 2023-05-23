import React, { useState } from 'react'

function LocalTime() {
  
  const checkTime = () => {
    let checkTime = new Date().toLocaleTimeString();
    return checkTime;
  }

  const [localTime, setLocalTime] = useState(checkTime())

  const handleLocalTime = () => {
    setLocalTime (checkTime())
  }

  setInterval(handleLocalTime, 1000)



  return (
    <div className='localTime'>
      <p> {localTime} </p>
    </div>
  )
}

LocalTime.defaultProps = {
 localTime: 'LocalTime'
}

export default LocalTime
