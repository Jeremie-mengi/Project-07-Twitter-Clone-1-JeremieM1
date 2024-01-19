import av from "../images/profile-photo.png";
import TopTweets1 from "../Icons/Top-Tweets1.png";
import TopTweets2 from "../Icons/Top-Tweets2.png";
import TopTweets3 from "../Icons/Top-Tweets3.png";
import TopTweets4 from "../Icons/Top-Tweets4.png";
import TopTweets5 from "../Icons/Top-Tweets5.png";
import { CloneContext} from "../componentContext/cloneContext";
import { useContext, useState } from "react";

function TweetEditor() {
const [inputText, setinputText] = useState('')
 const {addMyTweet,tweetPost, setTweetPost} = useContext(CloneContext); 
  const textInput = (e) =>{
    setinputText(e.target.value)
  }
  const clickButton = () => {
    addMyTweet(inputText, tweetPost, setTweetPost);

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