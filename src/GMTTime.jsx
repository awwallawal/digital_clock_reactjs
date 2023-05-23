import React, { useState } from 'react'

function GMTTime() {
  const checkGmtTime = () => {
    let gmtTime = new Date().toUTCString();
    return gmtTime;
  }
  const [gmtTime, setGmtTime] = useState(checkGmtTime());

  const handleGmtTime = () => {
    setGmtTime(checkGmtTime);
  }

  setInterval(handleGmtTime,1000)

  return (
    <div className='gmtTime'>
      <p>{gmtTime}</p>
    </div>
  )
}

GMTTime.defaultProps = {
 gmtTime: "GMT Time and Date"
}

export default GMTTime
