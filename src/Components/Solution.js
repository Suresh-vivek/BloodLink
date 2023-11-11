import "./Solution.css";

const Solution = () => {
  return (
    <div className="sol-outer">
      <div>
        <span className="sol-text"> Blood Link Solution</span>
        <div className="cards">
          <div className="card-outer">
            <img src={require("../Assets/peer.png")} className="card-image" />
            <span className="card-text">Peer to Peer Connect</span>
            <span className="card-text1">
              We connect blood donor with blood seeker so that a donor can see
              visible impact created by their blood in someone's life.
            </span>
          </div>

          <div className="card-outer">
            <img
              src={require("../Assets/real-time.png")}
              className="card-image"
            />
            <span className="card-text">Real Time</span>
            <span className="card-text1">
              Our platform connects blood donors and blood seekers on real time
              which reduces time. The time saved can play critical role in
              saving lives in emergency condition
            </span>
          </div>

          <div className="card-outer">
            <img src={require("../Assets/nearby.png")} className="card-image" />
            <span className="card-text">Nearby</span>

            <span className="card-text1">Simply Blood shares blood requests to all potential blood donors within 5kms from the location its needed. This increases possibilities of a donor to visit hospital or blood bank to donate blood to a patient. </span>
          </div>


          <div className="card-outer">
            <img src={require("../Assets/community.png")} className="card-image" />
            <span className="card-text">Community</span>

            <span className="card-text1">Discover uplifting stories of life-saving acts. Join our community, share your own, and be inspired to make a difference through blood donation.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
