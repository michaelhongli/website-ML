import UBPPic from "../../assets/imgs/greatwallPic.jpg";
import InternshipTemplate from "../layout/internship-template";

function Second(){
  return(
    <InternshipTemplate 
      companyName={"GreatWall AssetManagement"}
      description= "As a Data R&D Intern at Greatwall Wealth Asset Management, I managed risk control standards and investment limits in database systems. I maintained financial data pipelines used across departments and worked with Credit Rating and IT teams to support their analysis needs. I also updated database structures to comply with new regulations and resolved data processing issues."
      date={"Internship- May 2023 ~ Jul 2023"}
      img={UBPPic} />
  )
}

export default Second;