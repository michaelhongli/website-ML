import UBPPic from "../../assets/imgs/UBPPic.jpg";
import InternshipTemplate from "../layout/internship-template";

function First(){
  return(
    <InternshipTemplate 
      companyName={"UBP"}
      description= "As a Financial Markets Analyst and Quantitative Strategy Intern at UBP, I specialized in analyzing global markets with a focus on black swan events, particularly in China's A-share market. I developed entry and exit signals for trading strategies to improve resilience against unexpected market shocks. My work included analyzing equity market metrics, authoring weekly market reports, and monitoring major Chinese indices and foreign investment flows. I also refined calculation methods for market indicators, gaining comprehensive experience in financial analysis, quantitative methods, and strategy development."
      date={"Internship- Jul 2024 ~ Sep 2024"}
      img={UBPPic} />
  )
}

export default First;