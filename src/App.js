import React from 'react';
import Header from './Component/Pages/Header/Header';
import About from './Component/Pages/About/About';
import Skill from './Component/Pages/Skill/Skill';
import Contact from './Component/Pages/Contact/Contact';
import './App.css';
const App = () => {
  return (
    <div className='containeer-fluid mainPage w-100 p-0 m-0' style={{border:"1px solid white"}} >
      <div className='w-100' >
        <Header />
        <About/>
        <Skill/>
        <Contact/>
        <a href='#Header' className='btn bg-warning' id='up'>MOVE UP</a>
       </div>
    </div>
   
  )
}

export default App