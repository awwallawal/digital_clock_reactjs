import { useState } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import Clock from '../src/images/white-clock.png'
import Morning from '../src/images/icons8-morning.gif'
import Afternoon from '../src/images/icons8-sunshine.gif'
import Evening from '../src/images/icons8-sunset.gif'
import Night from '../src/images/icons8-night.gif'




function App() {



  
  
  const greeting = () => {
    let localHour = new Date().getHours();
    let message = "";
    let cup = "TY"

    if(localHour >= 0 && localHour < 12){
      message = `Morning 🌄`
    } else if(localHour >= 12 && localHour < 16){
      message = `Afternoon ☀️`
    } else if(localHour >= 16 && localHour < 20){
      message = `Evening 🌇`
    }  else if(localHour >= 20 && localHour < 23){
      message = `Night 🌃`
    }

    return message
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const title = "Digital Clock";
  const developer = "Awwal";
  const year = new Date().getFullYear();
  return (
    <div className='App'>
      <Header 
        title={title}
        Clock={Clock}
      />

      <MainContent
        greeting={greeting()}
        timezone={timezone}
      />

      <Footer 
        developer={developer}
        year={year}
      />

    </div>
  )
}

export default App
