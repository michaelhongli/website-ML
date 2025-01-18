import UBPPic from "../../assets/imgs/shenyiPic.jpg";
import InternshipTemplate from "../layout/internship-template";

function Fourth(){
  return(
    <InternshipTemplate 
      companyName={"Shanghai Shenyi Investment Co."}
      description= "Built a Python-based data pipeline integrated with SQLite3 to process daily OHLCV data for 500+ stocks, implementing data validation checks that reduced errors by 40%. Developed custom technical indicators including 20/50/200-day moving averages and RSI oscillators, generating automated trading signals for momentum strategies. Conducted backtests on 5 years of historical data across multiple market cycles, achieving a 15% improvement in signal accuracy. Provided weekly analysis reports to the algorithm modeling team that directly influenced strategy adjustments for the firm's systematic trading models."
      date={"Internship- May 2024 ~ Jul 2024"}
      img={UBPPic} />
  )
}

export default Fourth;