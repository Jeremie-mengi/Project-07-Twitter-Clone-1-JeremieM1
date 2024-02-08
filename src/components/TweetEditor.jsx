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
import { useForm } from "react-hook-form";

function TweetEditor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const {tweetPost,setTweetPost}  = useContext(CloneContext);
const [inputText, setInputText] = useState('');
const [FileImage, setFileImage] = useState(null);

const addMyTweet = () =>{
  if (inputText !== ''){
    const tweetTampon =
      {
   id :tweetPost.length+1,
   title :"CNN",
   titleDetails:"@CNN",
   timeTtweetDetails :"7m",
   avatar :av,
   text:inputText,
   image:FileImage,
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
setInputText("");
setFileImage(null);
  }
}
   

const handle = (e)=> {
  const file = e.target.files[0]
  if (file && e.target.id==='Imagefile'){
    const reader = new FileReader()
    reader.onloadend = ()=>{
      setFileImage(reader.result)
    };
    reader.readAsDataURL(file);
  }
}
    return(
        <>
        <div className="tweet-editor "> 
<a href="#">
<img src={av} className="avatar" />
</a>

<form onSubmit={handleSubmit((data) => addMyTweet(data))} className="tweet-editor-form">

<input  {...register("name", {required: true, minLength: 5})} 
type="text"  
placeholder="Whats is happening"  
className="tweet-editor-input"
onChange={(e)=>setInputText(e.target.value)}
value={inputText}
/>
{errors.name && <p className="text-red-700">Ce champ est requis, ou doit avoir au minimum 5 caractères</p>}
<div className="tweet-editor-buttons">
<div className="tweet-editor-actions">
<label htmlFor="Imagefile"><img type="image" src={TopTweets1} />
   <input type="file"className="hidden" id="Imagefile" onChange={handle} />
</label>  
  <button> <img type="image"  src={TopTweets2}/> </button>
  <button> <img type="image" src={TopTweets3} /> </button>
  <button> <img type="image" src={TopTweets4} /> </button> 
  <button> <img type="image" src={TopTweets5} /> </button>
</div>

<button className="button">Tweet</button>
</div>
</form>
{FileImage&& <img className="w-[50px]" src={FileImage}/>}
</div>
        
        </>
    )
    
}
export default TweetEditor;