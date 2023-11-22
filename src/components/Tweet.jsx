import Cnn from "../images/tweet-profile-photo.png";
import Ver from "../Icons/Verified.png";
import Name from "../Icons/Name.png";
import Point from "../Icons/Point.png";
import m from "../Icons/7m.png";
import Buton1 from '../Icons/Buton1.png';
import Buton2 from '../Icons/Buton2.png';
import Buton3 from '../Icons/Buton3.png';
import Buton4 from '../Icons/Buton4.png';

function Tweet(props){
return(<>
<div className="tweet">
<a><img src={Cnn} alt=""  className="tweet-avatar "/></a> 

    <div className="tweet-body">

    <p className="tweet-title" >
<span className="tweet-title-author">{props.title}</span>
<span><a href="#"><img src={Ver}/></a></span>
<span className="tweet-title-details">@CNN</span>
<span className="tweet-title-details">.</span>
<span className="tweet-title-details">7m</span>
   </p>

   <p className="tweet-text">President joe Biden touted a new agreement 
    reached with the European Union to ease 
    Trump-era tariffs on aluminum and steel as a 
    "major breakthrough" that would serve to both 
    strengthen the Us steel industry and combat the global climat crisis</p>

<div className="tweet-actions">

 <div className="tweet-action">
<a href='#'><img src={Buton1} alt="" className='actions'/></a>
<p>57</p>
</div>

<div className="tweet-action">
<a href='#'><img src={Buton2} alt="" className='actions'/></a>
<p>144</p>
</div>

<div className="tweet-action">
<a href='#'><img src={Buton3} alt="" className='actions'/></a>
<p>184</p>
</div>

<div className="tweet-action">
<a href='#'><img src={Buton4} alt="" className='actions'/></a>
</div>
</div>
    </div>
    </div>
</>
 )
 }
export default Tweet; 