import React from 'react'
import Greeting from './Greeting'
import LocalTime from './LocalTime'
import GMTTime from './GMTTime'

function MainContent({ greeting, localtime, gmtTime }) {

  

  return (
    <div className='MainContent'>
     <Greeting 
      greeting={greeting}
     />



     <LocalTime 
      localtime={localtime}
     />

     <GMTTime 
      gmtTime={gmtTime}
     />
    </div>
  )
}

export default MainContent
