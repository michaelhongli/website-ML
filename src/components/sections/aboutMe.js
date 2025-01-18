import Mug from '../../assets/imgs/aboutmePic.jpg'

function AboutMe(){
  return(
    <div className="internship-wrapper">
      <div className="internship-container">
        <div className="role-description">
          <em className="company-title" style={{fontFamily: "'Times New Roman', serif", fontSize: "30px", display: "block", fontWeight: 100}}>Student at Rutgers University | Driven by Innovation</em>
                      I'm a Computer Science graduate with a deep fascination for the fundamental laws that govern our universe. My approach combines technical precision with philosophical inquiry - I believe in viewing challenges from multiple perspectives, much like observing light's interaction with matter.
            While my foundation is in software engineering, my true passion lies in understanding the artistic and surreal nature of physics. I see technology not just as a tool, but as a lens through which we can explore deeper truths about reality.
          <div className="date"></div>
        </div>
        <img src={Mug} style={{height:"700px", width:"540px", objectFit:"cover", marginLeft:"70px"}}></img>
      </div>
    </div>
  )
}

export default AboutMe;