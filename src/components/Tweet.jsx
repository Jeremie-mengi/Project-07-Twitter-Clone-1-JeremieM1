import Ver from "../Icons/Verified.png";
import twitter from "../models/objet";
import TweetLikes from "./TweetLikes";


function Tweet(){
    const tweetEntier = twitter.map((item) => (
   
         <div key= {item.id} className="flex justify-start items-start gap-0.5  pt-6 pr-4 border-b border-b-gray-800"> 
 <a href="#" className="max-w-full max-h-full rounded-full"  >< img  src={item.avatar} alt=""/></a> 
      <div className="flex flex-col gap-2">
      <p className="flex justify-start items-start gap-0.5 text-base" >
   <span className="text-base">{item.title}</span>
   <span><a href="#"><img src={Ver}/></a></span>
   <span className="text-gray-400">{item.titleDetails}</span>
   <span className="text-gray-400">.</span>
   <span className="text-gray-400">{item.timeTtweetDetails}</span>
   </p>

    <p className="text-base text-slate-200">{item.text}</p>

    <div className= "tweet-image"> <img src={item.image} alt=""/>
     </div>
<div className="tweet-actions" >
<TweetLikes IcImg = {item.BoutonTweet.Icon1}  Nb ={item.BoutonTweet.Nbre2} />
<TweetLikes IcImg = {item.BoutonTweet.Icon2}  Nb ={item.BoutonTweet.Nbre2} />
<TweetLikes IcImg = {item.BoutonTweet.Icon3}  Nb ={item.BoutonTweet.Nbre2} />
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