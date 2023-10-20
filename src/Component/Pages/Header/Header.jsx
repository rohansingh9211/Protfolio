import React,{useEffect} from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import logo from '../../Images/logo.png'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
const Header = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
  return (
   <>
    <div className='container-fluid mainPage' style={{border:"2px solid transparent"}} id='Header' >
            <p className='animate'></p>
            <div className='row mt-2'>
                <div className='col-md-3 col-12 logoImage'>
                <img className='' src={logo} alt="some error" width="190px" height="70px" />
                </div>
                <div className='col-md-9 col-12 d-flex justify-content-end align-items-center'>
                <a href="/">HOME</a>
                <a href="#About">ABOUT</a>
                <a href="#Skill">SERVICE</a>
                <a href="#Contact">CONTACT</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-10 col-12 someAbout' data-aos="zoom-in">
                    <div>
                        <h1 className='heading'>HELLO, I'm ROHAN SINGH. . .</h1>
                        <p className='passion'>An Information Technology Student Passionate About</p>
                        <span className="typeWriter">
                        <Typewriter 
                            options={{
                            strings: ['WEB DEVELOPMENT. . .', 'FRONTEND DEVELOPMENT. . .', 'BACKEND DEVELOPMENT. . .', 'DJANGO. . . ', 'COMPETITIVE PROGRAMMING. . .'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                        </span> 
                        <IconContext.Provider value={{ color: "aqua", size: "2rem", className: "global-class-name" }}>
                        <button className="link-button m-1" style={{backgroundColor:"transparent",border:"none"}} onClick={() => window.open('https://github.com/dashboard', '_blank')}>
                            <FaGithub />
                        </button>
                        <button className="link-button m-1" style={{backgroundColor:"transparent",border:"none"}} onClick={() => window.open('https://www.linkedin.com/in/rohan-singh-9483b7220/', '_blank')}>
                            <FaLinkedin />
                        </button>

                        </IconContext.Provider>
                    </div>
                    
                </div>
            </div>
        </div>         
    </>
  )
}

export default Header