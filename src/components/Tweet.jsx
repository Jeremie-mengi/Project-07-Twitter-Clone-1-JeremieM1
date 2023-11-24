
import Ver from "../Icons/Verified.png";

function Tweet({title,titleDetails,tweetTitleDetails,Cn, 
    commententaires, Stick, 
    jaime,Feuil, clas,Text,Buton1,Buton2,Buton3,Buton4}){
return(<>
<div className="tweet">
<a href="#" className="tweet-avatar img" ><img src={Cn} alt=""/></a> 

    <div className="tweet-body">

    <p className="tweet-title" >
<span className="tweet-title-author">{title}</span>
<span><a href="#"><img src={Ver}/></a></span>
<span className="tweet-title-details">{titleDetails}</span>
<span className="tweet-title-details">.</span>
<span className="tweet-title-details">{tweetTitleDetails}</span>
   </p>

   <p className="tweet-text">{Text}</p>

    <div className={clas}>
    <img src={Feuil} alt=""    className="tweet-image img"/>
    </div>
<div className="tweet-actions" >

 <div className="tweet-action">
<a href='#'><img src={Buton1} alt="" className='actions'/></a>
<p>{commententaires}</p>
</div>

<div className="tweet-action">
<a href='#'><img src={Buton2} alt="" className='actions'/></a>
<p>{Stick}</p>
</div>

<div className="tweet-action">
<a href='#'><img src={Buton3} alt="" className='actions'/></a>
<p>{jaime}</p>
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