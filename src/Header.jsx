import React from 'react'


function Header({ title, Clock }) {
  return (
    <div className='Header'>

     <img src={Clock} alt="Clock Image" style={{width: "40px", height: "40px" }} />

      <h1> {title} </h1>
      
    </div>
  )
}

Header.defaultProps = {
 title: "Title"
}

export default Header
