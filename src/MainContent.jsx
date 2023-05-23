import React from 'react'
import Greeting from './Greeting'
import LocalTime from './LocalTime'
import GMTTime from './GMTTime'

function MainContent({ greeting, localtime, gmtTime, timezone }) {

  

  return (
    <div className='MainContent'>
     <Greeting 
      greeting={greeting}
      timezone={timezone}
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
