import React from 'react'

function Greeting({ greeting }) {

  return (
    <div className='greeting'>
      <p> Good {greeting} Guest ! </p>
    </div>
  )
}

Greeting.defaultProps = {
 greeting: "time-of-day"
}

export default Greeting
