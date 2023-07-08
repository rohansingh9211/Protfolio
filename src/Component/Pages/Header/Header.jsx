import React,{useEffect} from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import logo from '../../Images/logo.png'
const Header = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
  return (
   <>
    <div className='container-fluid mainPage' style={{border:"2px solid black"}} id='Header' >
            <div className='row mt-2'>
                <div className='col-md-3 col-12 logoImage'>
                <img className='' src={logo} alt="some error" width="190px" height="70px" />
                </div>
                <div className='col-md-9 col-12 d-flex justify-content-end align-items-center'>
                <a href="/">HOME</a>
                <a href="#About">ABOUT</a>
                <a href="#Skill">SKILL</a>
                <a href="#Contact">CONTACT</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-10 col-12 someAbout' data-aos="zoom-in">
                    <div>
                        <strong className='fs-2'>HELLO, I'm ROHAN SINGH. . .</strong>
                        <p className='fs-4 para'>An Information Technology Student Passionate About</p>
                        <span className="typeWriter">
                        <Typewriter 
                            options={{
                            strings: ['WEB DEVELOPMENT. . .', 'FRONTEND DEVELOPMENT. . .', 'BACKEND DEVELOPMENT. . .', 'DJANGO. . . ', 'COMPETITIVE PROGRAMMING. . .'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                        </span> 
                    </div>
                </div>
            </div>
        </div>         
    </>
  )
}

export default Header