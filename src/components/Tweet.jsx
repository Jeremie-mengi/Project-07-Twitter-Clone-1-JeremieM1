import { useContext } from "react";
import Ver from "../Icons/Verified.png";
import TweetLikes from "./TweetLikes";
import { CloneContext } from "../componentContext/cloneContext";
import { Link } from "react-router-dom";
function Tweet(){
    const cont = useContext(CloneContext)
    const tweetEntier = cont.tweetPost.map((item) => (
   
         <div key= {item.id} className="flex justify-start items-start gap-0.5  pt-6 pr-4 py-4  border-b border-b-gray-800"> 
 <Link to={`/${item.title}`} className="tweet-avatar img"  >< img  src={item.avatar} alt=""/></Link> 
      <div className="flex flex-col gap-2">
      <p className="flex justify-start items-start gap-0.5 text-base" >
   <span className="text-base">{item.title}</span>
   <span><a href="#"><img src={Ver}/></a></span>
   <span className="text-gray-400">{item.titleDetails}</span>
   <span className="text-gray-400">.</span>
   <span className="text-gray-400">{item.timeTtweetDetails}</span>
   </p>

    <p className="text-base text-slate-200">{item.text}</p>

    <div className= "width-full p-[.3rem 0 0 0]"> <img className="rounded-[50px] h-auto  max-width-[100%]    border-solid  " src={item.image} alt=""/>
     </div>
<div className="flex justify-center items-center gap-[5rem] color-[gray] text-base" >

<button  className='flex justify-center items-center gap-[20px] background-[black] color-gray'>
<img src={item.BoutonTweet.Icon1}  />
<span className=''>{item.BoutonTweet.Nbre1}</span>
</button>

<button  className='flex justify-center items-center gap-[20px] background-[black] color-gray'>
<img src={item.BoutonTweet.Icon2}  />
<span className="">{item.BoutonTweet.Nbre2}</span>
</button>
{/* <TweetLikes IcImg = {item.BoutonTweet.Icon1}  Nb ={item.BoutonTweet.Nbre2} />
<TweetLikes IcImg = {item.BoutonTweet.Icon2}  Nb ={item.BoutonTweet.Nbre2} /> */}
<TweetLikes Icon3 = {item.BoutonTweet.Icon3}  Nb ={item.BoutonTweet.Nbre2} />
<button  className='flex justify-center items-center gap-[20px] background-[black] color-gray'>
<img src={item.BoutonTweet.Icon4}  />
</button>

</div>
</div>
</div> 
));

    return(
        <div>{tweetEntier}</div>

    )


}
export default Tweet; 