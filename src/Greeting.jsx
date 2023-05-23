import React from 'react'

function Greeting({ greeting, timezone }) {
  

  return (
    <div className='greeting'>
      <p> Good {greeting} Guest from {timezone} ! </p>
    </div>
  )
}

Greeting.defaultProps = {
 greeting: "time-of-day",
 timezone: "(timezone of guest)"
}

export default Greeting
