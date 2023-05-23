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

  const checkTime = () =>{
    let currentTimeCheck = new Date().toLocaleTimeString();
    return currentTimeCheck
  }

  const checkGMT = () =>{
    let currentGMTCheck = new Date().toDateString();
    return currentGMTCheck
  }

  const [currentTime, setCurrentTime] = useState(checkTime());
  const [currentGMT, setCurrentGMT] = useState(checkGMT());

  const handleSetCurrentTime = () => {
    setCurrentTime(checkTime())
  }

  const handleSetCurrentGMT = () => {
    setCurrentGMT(checkGMT())
  }

  setInterval(handleSetCurrentTime, 1000);
  setInterval(handleSetCurrentGMT, 1000);

  const greeting = () => {
    let localHour = new Date().getHours();
    let message = "";

    if(localHour > 0 && localHour < 12){
      message = `Morning 🌄`
    } else if(localHour > 12 && localHour < 16){
      message = `Afternoon ☀️`
    } else if(localHour > 16 && localHour < 20){
      message = "Evening 🌇"
    }  else if(localHour > 20 && localHour < 23){
      message = "Night 🌃"
    }

    return message
  }


  const title = "Digital Clock"
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
      />

      <Footer 
        developer={developer}
        year={year}
      />

    </div>
  )
}

export default App
