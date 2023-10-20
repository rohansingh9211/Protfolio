import React,{useEffect} from 'react'
import './About.css'
import Typewriter from 'typewriter-effect';
import photo from '../../Images/photo.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
      <div className='container-fluid' id='About'>
        <div className='row about' data-aos="zoom-out-right">
          <div className='col-md-4 d-flex justify-content-center align-items-center mt-5 mb-5'>
            <img className="photoShop" src={photo} alt="some error" width="200px" height="250px" />
          </div>
          <div className='col-md-6 d-grid align-items-center mt-5 mb-5'>
            <h3 className='ml-3'>ABOUT ME</h3>
            <p style={{color:"white",fontFamily: 'math'}}>My name is Rohan Singh. I'm a BTECH student at Oriental Institute of Science and Technology in Information Technology. I was born and raised in Bhopal. I completed my Diploma in Computer Science from Sardar Vallabhbhai Patel Polytechnic, Bhopal.</p>
            <p style={{color:"white",fontFamily: 'math'}}>I enjoy traveling, playing cricket, volleyball, and coding. I believe that traveling provides a new perspective on everything. It exposes you to different cultures, cuisines, history, languages, and unique aspects of each place.</p>
            <span className="typeWriter2">
              <Typewriter 
                options={{
                  strings: ['OPEN TO WORK', 'TECHNOLOGY', 'LEARNING', 'USEFUL CODE', 'TASKS'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span> 
            <a href="https://drive.google.com/file/d/19R7hY8rfLw0Jko7_zbXNvHkpw2iVQ-YT/view?usp=drive_link" className='btn btn-warning p-1' target='blank'>Download Or See CV</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default About