import React from "react";
import twe from "../models/objet";
import { createContext, useState } from "react";

export const CloneContext = createContext();

function CloneProvider({children}) {
    const [tweetPost, setTweetPost] = useState(twe);
    const [inputText, setinputText] = useState('')

const addMyTweet = () =>{
  if (inputText !== ''){
    const tweetsTampon = tweetPost

    tweetsTampon.unshift(
      {
        id:tweetPost.length+1,
        text : inputText
      }
    )
    setinputText(tweetsTampon)
    setinputText('')
  }
}
    return (
        <CloneContext.Provider value={{tweetPost,inputText,setinputText,addMyTweet,setTweetPost}}>
          {children}
        </CloneContext.Provider>
    );
};

export default CloneProvider;