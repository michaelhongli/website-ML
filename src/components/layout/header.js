import { useEffect, useState } from 'react';
import '../../styles/components/header.css';
import {Link} from 'react-router-dom';

function NavBar(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollTest = () => { 
      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollTest);
  })

  return (
    <div className={`nav-container ${scrolled? "fade" : ""}`}>
      <Link to="/" className='logo'>Michael Li</Link>
      <div className='nav-links'>
        <Link to="/aboutMe">Info</Link>
        <a href='https://www.linkedin.com/in/michael-li-a59636250/'>Projects</a>
      </div>
    </div>
  )
}

export default NavBar;