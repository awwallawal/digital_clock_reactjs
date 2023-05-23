import React from 'react'

function GMTTime({ gmtTime }) {
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
