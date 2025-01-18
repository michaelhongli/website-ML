import '../../styles/components/footer.css';

function FooterLinks(){
  return(
    <>
      <div className='footer-container'>
        <div className='footer-description'>
          <div className='description-name'>Michael Li</div>
          <em style={{display: "block", fontSize: "19px", fontWeight: "300"}}>mhl98@scarletmail.rutgers.edu</em>
          <em>+1-973-489-3513</em>
        </div>
        <div className='social-links'>
          <a href='https://www.linkedin.com/in/il-leahcim/'>LinkedIn</a>
          <a href='https://github.com/michaelhongli'>Github</a>
          <a href='https://www.instagram.com/mybicycle233/'>Instagram</a>
        </div>
      </div>
    </>
  )
}

export default FooterLinks;