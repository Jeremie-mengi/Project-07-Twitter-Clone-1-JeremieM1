import Ver from "../Icons/Verified.png";
import twitter from "../models/objet";
import TweetLikes from "./TweetLikes";


function Tweet(){
    // const [counter, setCounter] = useState( counterAction );
    // const [actionType, setActionType] = useState("increment");
    // const [switchIcon, setSwitchIcon] = useState( iconAction )

    //     const handleClick = () => {
    //         if (actionType === "increment") {
    //             setCounter(counter + 1);
    //             setActionType("decrement");
    //             setSwitchIcon(swichIconAction)
    //           } else {
    //             setCounter(counter - 1);
    //             setActionType("increment");
    //             setSwitchIcon( iconAction )
    //           }
        
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