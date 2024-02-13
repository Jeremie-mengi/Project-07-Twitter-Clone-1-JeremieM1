import React from "react";
import { createContext, useState, useEffect } from "react";
import twe from "../models/objet";
import Mydata from "../Data/MyFile.json";
import axios from "axios";


export const CloneContext = createContext();

function CloneProvider({children}) {
  useEffect(() =>{
    axios.get("http://localhost:3000/tweets")
  .then((response)=>{
    console.log(response);
    setTweetPost(response.data)
  })
  .catch((error) =>{
    console.error("Erreur lors de la recuperation des tweets:", error)
  })
  },[])

  const [tweetPost, setTweetPost] = useState(Mydata.tweets);
     const addTwitters = (add)=> {
    const twettactuel = tweetPost 
    axios.post("http://localhost:3000/tweets",add)
    .then((response) => setTweetPost([response.data,...twettactuel]))
  }
  return (
        <CloneContext.Provider value={{tweetPost,setTweetPost,addTwitters}}>
          {children}
        </CloneContext.Provider>
    );
};
 

export default CloneProvider;