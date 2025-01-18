import '../../styles/components/internship-template.css'

function InternshipTemplate({companyName, description, date, img}){
  return(
    <div className="internship-wrapper">
      <div className="internship-container">
        <div className="role-description">
          <div className="company-title">{companyName}</div>
            {description}
          <div className="date">{date}</div>
        </div>
        <img src={img} style={{height:"700px", width:"540px", objectFit:"cover", marginLeft:"70px"}}></img>
      </div>
    </div>
  )
}

export default InternshipTemplate