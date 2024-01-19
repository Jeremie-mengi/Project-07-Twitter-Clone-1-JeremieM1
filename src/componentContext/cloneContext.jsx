import React from "react";
import { createContext, useState } from "react";
import Cnn from "../images/tweet-profile-photo.png";
import Buton1 from '../Icons/Buton1.png';
import Buton2 from '../Icons/Buton2.png';
import Buton3 from '../Icons/Buton3.png';
import Buton4 from '../Icons/Buton4.png';
import twe from "../models/objet";
import av from "../images/profile-photo.png";
export const CloneContext = createContext();

function CloneProvider({children}) {
  const [tweetPost, setTweetPost] = useState(twe);
const addMyTweet = (inpText, Tweets, setter) =>{
  if (inpText !== ''){
    const tweetsTampon = Tweets
    tweetsTampon.unshift(
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
   
       Icon3 : Buton3,
       Nbre3 : 184,
   
       Icon4 : Buton4
}
      }
      )
      console.log({tweetsTampon});
    setter(tweetsTampon)

  }
}
    return (
        <CloneContext.Provider value={{tweetPost,addMyTweet,setTweetPost}}>
          {children}
        </CloneContext.Provider>
    );
};

export default CloneProvider;