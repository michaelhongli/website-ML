import profileImage from '../../assets/imgs/me2.jpg';
import '../../styles/components/hero.css'

function FirstSection(){
  return(
    <main className='first-section-container'>
      <div style={{marginRight: "-65px"}}>
        <header className='email'>
          <em>mhl98@scarletmail.rutgers.edu</em>
        </header>
        <div className='maintitle first-maintitle'>
          PORTFOLIO
        </div>
        <div className='maintitle' style={{marginBottom: "100px"}}>
          PORTFOLIO
        </div>
        <div className='personal-description'>
          <div className= 'short-description' style={{width: "480px", fontSize: "20px"}}>
            <div style={{marginBottom: "30px"}}>
              Senior Computer Science major at Rutgers University, focusing on the intersection of technology with finance and healthcare.
            </div>
            <div>
              I'm driven by the potential of computer science to optimize trading strategies and advance medical research. 
            </div>
          </div>
          <div className='name-and-mug'>
            <img className= "mugshot" src={profileImage}></img>
            <div>
              <div className='name-card'>Michael Li</div>
              <div className='role-name'><em>Software Engineer / Rutgers University</em></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FirstSection;