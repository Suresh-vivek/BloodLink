import "./Problems.css";

const Problems = () => {
  return (
    <div>
      <div className="outer-box">

        <div className="inner-left">

            <span className="inner-left-text">Shortage</span>
            <span className="inner-left-text1"> In India everyday more than 12,000 people fail to get blood due to shortage.</span>
        </div>

        <div className="inner-right">
            <img src={require("../Assets/Blood1.png")} className="image12"/>
        </div>



      </div>

      <div className="outer-box">
      <div className="inner-left">
      <img src={require("../Assets/Blood2.png")} className="image12"/>
      </div>

<div className="inner-right">
<span className="inner-left-text">Wastage</span>
            <span className="inner-left-text1">Due to lack of coordination between hospitals and blood banks more than 1 million unit of blood components were wasted.</span>
        

   
</div>


      </div>

      <div className="outer-box">
      <div className="inner-left">

      <span className="inner-left-text">Waiting Time</span>
            <span className="inner-left-text1">It takes more than 12 hours to get blood tranfused after raising a blood request as it takes a lot of time fora blood seeker to find suitable blood donor.</span>
        
      </div>

<div className="inner-right">
    <img src={require("../Assets/Blood3.png")} className="image12"/>
</div>

      </div>


    </div>
  );
};

export default Problems;
