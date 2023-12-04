import Ver from "../Icons/Verified.png";
import twitter from "../models/objet";

function Tweet(){
    const tweetEntier = twitter.map((item) => (
   
         <div key= {item.id} className="tweet">
 <a href="#" className="tweet-avatar img" ><img src={item.avatar} alt=""/></a> 

      <div className="tweet-body">
      <p className="tweet-title" >
   <span className="tweet-title-author">{item.title}</span>
   <span><a href="#"><img src={Ver}/></a></span>
   <span className="tweet-title-details">{item.titleDetails}</span>
   <span className="tweet-title-details">.</span>
   <span className="tweet-title-details">{item.timeTtweetDetails}</span>
   </p>

    <p className="tweet-text">{item.text}</p>

    <div className= "tweet-image"> <img src={item.image} alt=""/>
     </div>
<div className="tweet-actions" >
<button className='tweet-action'>
<img src={item.BoutonTweet.Icon1} />
{item.BoutonTweet.Nbre1}
</button>
<button className='tweet-action'>
<img src={item.BoutonTweet.Icon2} />
{item.BoutonTweet.Nbre2}
</button>
<button className='tweet-action'>
<img src={item.BoutonTweet.Icon3} />
{item.BoutonTweet.Nbre3}
</button>
<button className='tweet-action'>
<img src={item.BoutonTweet.Icon4} />
</button>

</div>
</div>
</div> ));

    return(
        <div>{tweetEntier}</div>

    )


}
export default Tweet; 