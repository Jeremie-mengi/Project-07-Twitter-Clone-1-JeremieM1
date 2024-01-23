import av from "../images/profile-photo.png";
import TopTweets1 from "../Icons/Top-Tweets1.png";
import TopTweets2 from "../Icons/Top-Tweets2.png";
import TopTweets3 from "../Icons/Top-Tweets3.png";
import TopTweets4 from "../Icons/Top-Tweets4.png";
import TopTweets5 from "../Icons/Top-Tweets5.png";
import Buton1 from '../Icons/Buton1.png';
import Buton2 from '../Icons/Buton2.png';
import Buton3 from '../Icons/Buton3.png';
import Buton4 from '../Icons/Buton4.png';
import { useContext, useState } from "react";
import { CloneContext } from "../componentContext/cloneContext";
import { AiOutlineHeart } from "react-icons/ai";

function TweetEditor() {
const {tweetPost,setTweetPost}  = useContext(CloneContext);
const [inputText, setInputText] = useState('');

const addMyTweet = (inpText) =>{
  if (inpText !== ''){
    const tweetTampon =
      {
   id :tweetPost.length+1,
   title :"CNN",
   titleDetails:"@CNN",
   timeTtweetDetails :"7m",
   avatar :av,
   text:inpText,
   BoutonTweet : { 
       Icon1 : Buton1,
       Nbre1 : 57,
       
       Icon2 : Buton2,
       Nbre2 : 144,
   
       Icon3 : AiOutlineHeart,
       Nbre3 : 184,
   
       Icon4 : Buton4
}
      }
      
    
    setTweetPost(e => [tweetTampon, ...tweetPost])

  }
}



  const textInput = (e) =>{
    setInputText(e.target.value)
  }
  const clickButton = () => {
    addMyTweet(inputText);

  } 

    return(
        <>
        <div className="tweet-editor "> 
<a href="#">
<img src={av} className="avatar" />
</a>

<form className="tweet-editor-form">

<input type="text" 
placeholder="Whats is happening"  
className="tweet-editor-input"
onChange={textInput}
value={inputText}
/>
<div className="tweet-editor-buttons">
<div className="tweet-editor-actions">
  <button> <img type="image"  src={TopTweets1}/></button>
  <button> <img type="image"  src={TopTweets2}/> </button>
  <button> <img type="image" src={TopTweets3} /> </button>
  <button> <img type="image" src={TopTweets4} /> </button> 
  <button> <img type="image" src={TopTweets5} /> </button>
</div>

<button className="button" onClick={(e) => {e.preventDefault(); clickButton()}} >Tweet</button>
</div>
</form>
</div>
        
        </>
    )
    
}
export default TweetEditor;