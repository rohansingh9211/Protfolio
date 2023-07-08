import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaGithub,FaLinkedin } from "react-icons/fa";
import "./Contact.css"
import { IconContext } from "react-icons";
const Contact = () => {
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [message,setMessage] = useState("")


  return (
    <>
   <div className='container-fluid' id='Contact'>
    <div className='row contact'>
        <div className='col-sm-12 d-flex justify-content-center' >
            <strong className='fs-2' style={{color:'goldenrod'}}>CONTACT ME</strong>
        </div>
        <div className='col-sm-12 p-3 d-flex justify-content-center'>
            <form  action="https://formspree.io/f/maygyeak" method="POST" >
                <div className="mb-1">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="name" placeholder='xyz'
                 value={username} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div className="mb-1">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputPassword1" name="email" placeholder='xyz@gmail.com'
                 value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mb-1">
                <label htmlFor="textMessage" className="form-label">Message</label>
                <textarea className="form-control" name="textMessage" id="textMessage" cols="30" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className='col-sm-12 d-grid justify-content-center align-items-center' style={{ backgroundColor: "rgba(0,0,0,0.6)", height: "fit-content" }}>
            <div className='row-col-12 m-1 mail_phone'>
                <strong className='m-2'>
                <FontAwesomeIcon icon={faEnvelope} size='xl' />
                <span>19rohansingh20@gmail.com</span>
                </strong>
                <strong className='m-2'>
                <FontAwesomeIcon icon={faPhone} style={{color: <FontAwesomeIcon icon={faPhone} style={{color: "#1a1919",}} />,}} />
                <span className='ml-1'>+91 8349222816</span>
                </strong>
            </div>
            <div className='d-flex justify-content-center'>
                <strong className='m-1'>Address: Awadhpuri Bhopal Madhya Pradesh</strong>
            </div>
        <div className='d-flex justify-content-center row-col-10'>
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

export default Contact