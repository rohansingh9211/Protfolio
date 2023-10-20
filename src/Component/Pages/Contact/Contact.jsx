import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css"
import { IconContext } from "react-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5q78bqs', 'template_onms95c', form.current, 'j4Cj2xxnKtKwlbJ5n')
            .then((result) => {
                console.log(result.text);
                toast.success(" Successfully send message to Rohan! ")
                setEmail(""); setUsername("");
                setMessage(""); setPhone("");
            }, (error) => {
                toast.error(" Something went wrong please try again! ")
                console.log(error.text);
            });
    };

    return (
        <>
            <div className='container-fluid' id='Contact'>
                <div className='row contact'>
                    <div className='main_grid_system'>
                        <div className='descriptions'>
                            <strong className='contact_conferm'>Please feel free to contact me for a link to my portfolio, where you can 
                            explore my work in greater detail. I'm eager to share my achievements and demonstrate how my skills and 
                            expertise can contribute to your organization's success.</strong>
                        </div>
                        <div className='contact_me_of'>
                            <div className='form_data'>
                                <form ref={form} onSubmit={sendEmail} >
                                    <strong className='fs-2' style={{ color: 'goldenrod', textAlign: "center" }}>CONTACT ME</strong>
                                    <ToastContainer />
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" name="username" placeholder='Please Enter Your Name'
                                            value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Email</label>
                                        <input type="email" className="form-control" id="exampleInputPassword1" name="useremail" placeholder='Please Enter Your MailId'
                                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Phone Number</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" name="userphone" placeholder='Please Enter Your Phone Number'
                                            value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="textMessage" className="form-label text-white">Message</label>
                                        <textarea className="form-control" name="usermessage" id="textMessage" cols="30" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className='section'></div>
                        </div>
                    </div>

                    <div className='col-sm-12 d-grid justify-content-center align-items-center' style={{ backgroundColor: "rgba(255,255,255,0.1)", height: "fit-content",borderTopRightRadius:"50px",borderTopLeftRadius:"50px" }}>
                        <div className='row-col-12 m-1 mail_phone'>
                            <strong className='m-2' style={{color:"#0ef"}}>
                                <FontAwesomeIcon icon={faEnvelope} size='xl' style={{marginRight:"2px"}} />
                                <span>19rohansingh20@gmail.com</span>
                            </strong>
                            <strong className='m-2' style={{color:"#0ef"}}>
                                <FontAwesomeIcon icon={faPhone} style={{ color: <FontAwesomeIcon icon={faPhone} style={{ marginRight:"2px" }} />, }} />
                                <span className='ml-1 '>+91 8349222816</span>
                            </strong>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <strong className='m-1 text-info'>Address: Awadhpuri Bhopal Madhya Pradesh</strong>
                        </div>
                        <div className='d-flex justify-content-center row-col-10 p-2'>
                            <IconContext.Provider value={{ color: "aqua", size: "2rem", className: "global-class-name" }}>
                                <button className="link-button m-1" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => window.open('https://github.com/dashboard', '_blank')}>
                                    <FaGithub />
                                </button>
                                <button className="link-button m-1" style={{ backgroundColor: "transparent", border: "none" }} onClick={() => window.open('https://www.linkedin.com/in/rohan-singh-9483b7220/', '_blank')}>
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