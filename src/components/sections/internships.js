import MainPic from '../../assets/imgs/mainpic.jpg';
import '../../styles/components/internships.css';
import first from '../../assets/imgs/first.jpg';
import second from '../../assets/imgs/second.jpg';
import third from '../../assets/imgs/third.jpg';
import fourth from '../../assets/imgs/fourth.jpg';
import { Link } from 'react-router-dom';

function SecondSection(){
  return(
    <div className='internships-container'>
      <div className='internships-catalog'>
        <em className="experience-title">Experiences</em>
        <Link to="/first"><img src={third} style={{marginRight:"170px"}}></img></Link>
        <Link to="/second"><img src={first} style={{marginRight:"140px"}}></img></Link>
        <Link to="/third"><img src={fourth} style={{marginRight:"70px"}}></img></Link>
        <Link to="/fourth"><img src={second}></img></Link>
        <ul>
          <li>UBP</li>
          <li>GREATWALL A.M.C.</li>
          <li>RENBANG ELECTRIC</li>
          <li>SHENYI INVESTMENTS</li>
        </ul>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div className='main-internship'>
          <div style={{marginRight:"110px"}}>
            <img src={MainPic} style={{height: "650px", width: "460px", objectFit: "cover"}}></img>
          </div>
          <div>
          Between analyzing market data and building financial models, you'll find me brewing the perfect cup in unexpected places. <br></br><br></br> I believe in finding beauty in the details, whether it's in a well-crafted trading strategy or a carefully prepared cup of tea. <br></br><br></br> This blend of precision and patience defines both my professional approach and personal philosophy.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection;