import Cnn from "../images/tweet-profile-photo.png";
import Icon9 from '../Icons/Icon9.png';
import TweetIcon from '../Icons/Twitter_Icon.png';
import PhotoFeille from "../images/tweet-image.png";
import image1 from "../images/image1.png";
import av from "../images/profile-photo.png";
import Ver from "../Icons/Verified.png";
import {Link} from "react-router-dom";
import SlideBar from "../models/SlideBar";

function SideBraleft() {
    const slibarMap = SlideBar.map((key)=>(
        <Link to={key.Link}>
<div  keys={key.id} className="SideBraleft">
 <button
  className="SideBraleft-Child"><img  src= {key.Icon}/>{key.name} 
  </button>
</div>
</Link>
    ))
      return(
        <section>
        {slibarMap}
        <button className="button">Tweet</button>

<Link to={"/profile"} >
<div className="avat">

<img src={av} className="avatar" />

 
 <div className="Cont" >

  <h3 className="proName">Bradley Ortiz
  <span><img src={Icon9}/></span>
  </h3>

  <span id="Bradley">@Bradley_</span>

 </div>

</div>
</Link>
</section>

       )
    
}
export default SideBraleft;