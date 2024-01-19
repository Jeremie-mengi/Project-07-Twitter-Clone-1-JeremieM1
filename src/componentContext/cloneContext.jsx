import React from "react";
import { createContext, useState } from "react";
import twe from "../models/objet";

export const CloneContext = createContext();

function CloneProvider({children}) {
  const [tweetPost, setTweetPost] = useState(twe);
    return (
        <CloneContext.Provider value={{tweetPost,setTweetPost}}>
          {children}
        </CloneContext.Provider>
    );
};

export default CloneProvider;