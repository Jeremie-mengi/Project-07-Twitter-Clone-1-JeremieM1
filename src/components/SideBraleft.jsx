import Cnn from "../images/tweet-profile-photo.png";
import Icon1 from '../Icons/Icon1.png';
import Icon2 from '../Icons/Icon2.png';
import Icon3 from '../Icons/Icon3.png';
import Icon4 from '../Icons/Icon4.png';
import Icon5 from '../Icons/Icon5.png';
import Icon6 from '../Icons/Icon6.png';
import Icon7 from '../Icons/Icon7.png';
import Icon8 from '../Icons/Icon8.png';
import TweetIcon from '../Icons/Twitter_Icon.png';
import PhotoFeille from "../images/tweet-image.png";
import image1 from "../images/image1.png";


function SideBraleft() {
    return (
<div  className="SideBraleft">
  <button className="SideBraleft-Child"> <img  src= {TweetIcon}/></button>
  <button className="SideBraleft-Child"> <img  src= {Icon1}/>Home</button>
  <button className="SideBraleft-Child"> <img  src= {Icon2}/>Explore</button>
  <button className="SideBraleft-Child"> <img  src= {Icon3}/>Notifications</button>
  <button className="SideBraleft-Child"> <img  src= {Icon4}/>Messages</button>
  <button className="SideBraleft-Child"> <img  src= {Icon5}/>Bookmarks</button>
  <button className="SideBraleft-Child"> <img  src= {Icon6}/>Lists</button>
  <button className="SideBraleft-Child"> <img  src= {Icon7}/>Profile</button>
  <button className="SideBraleft-Child"> <img  src= {Icon8}/>More</button>
  <button className="button">Tweet</button>
</div>
    )
    
}
export default SideBraleft;