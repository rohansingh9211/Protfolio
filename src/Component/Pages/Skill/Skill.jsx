import { useState, useEffect } from 'react'
import "./Skill.css"
import { frontend, backend } from '../includes/Datafile'
const Skill = () => {
  const images = [
    {
      src: 'https://www.bacancytechnology.com/blog/wp-content/uploads/2020/08/frontend-framework-1100x600-1.png',
      title: 'FRONTEND DEVELOPMENT',
      description: 'I am a passionate frontend developer with a keen eye for detail and a love for creating exceptional user experiences. With 8 months of experience in the field, I specialize in turning design concepts into responsive, interactive, and visually appealing web applications.',
    },
    {
      src: 'https://ded9.com/wp-content/uploads/2021/03/backenddeveloper-2502825a14ff440eb775dc4244e7ed4d-1024x683.png',
      title: 'BACKEND DEVELOPMENT',
      description: 'I am a dedicated backend developer who specializes in building robust, efficient, and scalable server-side solutions.',
    },
    {
      src: 'https://exeliqconsulting.com/wp-content/uploads/2019/03/Devops-Tooln.png',
      title: 'DEVEOPS',
      description: 'I am a passionate DevOps engineer with a strong focus on optimizing software development and deployment processes.',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const technology = frontend;

  return (
    <>
      <div className='container-fluid' id='Skill'>
        <div className='row Skill d-flex justify-content-center' id='skill'>
          <strong className='fs-3 m-2' style={{ color: "#0ef", fontFamily: "emoji", textAlign: "center" }}>SERVICE AND SKILL</strong>
          <div id="skillpart">
            <div className="image-slider">
              <img src={images[currentImageIndex].src} alt={images[currentImageIndex].title} width="50%" height="50%" />
              <div className="image-details">
                <h2>{images[currentImageIndex].title}</h2>
                <p style={{ fontSize: "15px", fontWeight: "500", textAlign: "center" }}>{images[currentImageIndex].description}</p>
              </div>
            </div>
          </div>
          <div className='col_skill'>
            <div className='diff_skill'>
              {technology.map((item, index) => {
                return (
                  <div id="child_skill" className='mb-2' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                      className='mb-1'
                      src={item.image}
                      alt={item.title}
                      width='80px'
                      height='60px'
                      style={{ borderRadius: '10px' }}
                    />
                    <strong style={{ color: "yellow", fontFamily: "sans-serif", fontWeight: "10", fontSize: "80%" }}>{item.title}</strong>
                  </div>
                );
              })}
              <div className='skill_title'><span style={{ fontWeight: "400" }}>FRONTEND FRAMEWORK AND MODULES</span></div>
            </div>
            <div className='diff_skill'>
              {backend.map((item, index) => {
                return (
                  <div id="child_skill" className='mb-2' style={{ display: "flex", flexDirection: "column", alignItems: "center", fontWeight: "10", fontSize: "80%" }}>
                    <img
                      className='mb-1'
                      src={item.image}
                      alt={item.title}
                      width='80px'
                      height='60px'
                      style={{ borderRadius: '10px' }}
                    />
                    <strong style={{ color: "#4dde4d", fontFamily: "sans-serif" }}>{item.title}</strong>
                  </div>
                );
              })}
              <div className='skill_title'><span style={{ fontWeight: "400" }}>FRAMEWORK AND WORK ON IT'S</span></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: "center" }}>
            <strong className='fs-3 m-2' style={{ color: "#0ef", fontFamily: "emoji", textAlign: "center" }}>LANGUAGE</strong>
          </div>
          <div className="progress-container">
            <div className='progress-bar1'>
              <label htmlFor="c++" className='text-info'>C/C++</label>
              <div className='progress-bar2' name="c++">
                < div class="progress-bar3" style={{ width: "70%" }}>70%</div>
              </div>
              <label htmlFor="python" className='text-info'>PYTHON</label>
              <div className='progress-bar2' name="python">
                < div class="progress-bar3" style={{ width: "60%" }}>60%</div>
              </div>
              <label htmlFor="java" className='text-info'>JAVA</label>
              <div className='progress-bar2' name="java">
                < div class="progress-bar3" style={{ width: "40%" }}>40%</div>
              </div>
              <label htmlFor="php" className='text-info'>PHP</label>
              <div className='progress-bar2' name="php">
                < div class="progress-bar3" style={{ width: "40%" }}>40%</div>
              </div>
            </div>
            <div className='progress-bar1'>
              <label htmlFor="html" className='text-info'>HTML</label>
              <div className='progress-bar2' name="html">
                < div class="progress-bar3" style={{ width: "80%" }}>80%</div>
              </div>
              <label htmlFor="css" className='text-info'>CSS</label>
              <div className='progress-bar2' name="css">
                < div class="progress-bar3" style={{ width: "80%" }}>80%</div>
              </div>
              <label htmlFor="js" className='text-info'>JAVASCRIPT</label>
              <div className='progress-bar2' name="js">
                < div class="progress-bar3" style={{ width: "85%" }}>85%</div>
              </div>
              <label htmlFor="git" className='text-info'>GIT</label>
              <div className='progress-bar2' name="git">
                < div class="progress-bar3" style={{ width: "55%" }}>55%</div>
              </div>
            </div>
          </div>
        </div>
        <div className='' style={{display:"flex", justifyContent:"center"}}>
          <div className='internship'>
          <strong style={{ color: "#0ef", fontSize: "25px", fontWeight: "300", fontFamily: "emoji",textAlign:"center" }}>Internship and Work Experience Certificate</strong>
            <a href="https://drive.google.com/file/d/15a6Dr_VbwaZ8jwKpCXHekOsz2Ie4EePe/view?usp=share_link" target='blank' className='btn btn-warning' name="limbic">CERTIFICATE</a>
            <a href="https://drive.google.com/file/d/1ZmsmZFFAynYxoh3gew0Rpe7QbL1Cak5V/view?usp=share_link" target='blank' className='btn btn-warning'>CERTIFICATE</a>
            <p style={{color:"white", fontSize:"20px",textAlign:"center",fontFamily:"emoji"}}>I possess substantial work experience in the information technology sector, primarily in software development. My background includes a diverse range
             of projects and proficiency in various programming languages and methodologies. I have a consistent track record of delivering high-quality, efficient software solutions that align
              with industry standards.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill