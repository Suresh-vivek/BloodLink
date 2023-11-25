import "./Community.css";
import CommunityFeedNavbar from "./CommunityFeedNavbar";
import Post from "./Post";

const Community =() =>{
    const profile1 = require("../Assets/profile1.jpg");
    const profile2 = require("../Assets/profile2.jpg");
    const profile3 = require("../Assets/profile3.jpg");
    const profile4 = require("../Assets/profile4.jpg");

    const profile5 = require("../Assets/profile5.jpg");

    const donate1 = require("../Assets/donate1.jpg");
    const donate2 = require("../Assets/donate2.jpeg");
    const donate3 = require("../Assets/donate3.png");
    const donate4 = require("../Assets/donate4.png");
    const donate5 = require("../Assets/donate5.jpeg");

    
    



    return(<div>
        <CommunityFeedNavbar/>

        <div className="feed">
            <Post profileimage={profile1} profilename="Aman"  location="Faridabad"  date="10 minutes"   donateimage={donate1}  comment="21"  count={13} / >
            <Post profileimage={profile2} profilename="Vivek" location="Faridabad"  date="23/11/23"   donateimage={donate2}  comment="11"  count={12}/ >
            <Post profileimage={profile3} profilename="Samantha" location="Faridabad" date="19/11/23"   donateimage={donate3}  comment="15"  count={19}/ >
            <Post profileimage={profile4} profilename="Shruti" location="Faridabad" date="12/11/23"   donateimage={donate4}  comment="14"  count={27}/ >
            <Post profileimage={profile5} profilename="Tarun" location="Faridabad" date="09/10/23"   donateimage={donate5}  comment="17"  count={45}/ >

        </div>
    </div>);


};

export default Community;