import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweet from '../components/Tweet';
import Cnn from "../images/tweet-profile-photo.png";
import Tweet2 from "../Icons/Tweet2.png";
import PhotoFeille from "../images/tweet-image.png";
import image1 from "../images/image1.png";
import Buton1 from '../Icons/Buton1.png';
import Buton2 from '../Icons/Buton2.png';
import Buton3 from '../Icons/Buton3.png';
import Buton4 from '../Icons/Buton4.png';

function Home() {
  return (
    <main className="timeline">
    <Header/>
    <TweetEditor/>
    <Tweet  title={"CNN"} titleDetails={"@CNN"} 
    tweetTitleDetails ={"7m" } 
    Text={"President joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a \"major breakthrough\" that would serve to both strengthen the Us steel industry and combat the global climat crisis "} 
    Cn={Cnn}  Buton1= {Buton1}  
    Buton2= {Buton2}  Buton3= {Buton3} 
    Buton4= {Buton4} commententaires={57}  Stick={144} jaime={142}/>

    <Tweet  title={"The New York Times" } 
    titleDetails={"@nytimes"} tweetTitleDetails ={"2h" }  
    Text={"Gardening boomed during the pandemic.Six Black writers share show has helped them re-establish, and reimagine, a connection to cultivation and the land"} 
    Cn={Tweet2} 
    Buton1= {Buton1}  
    Buton2= {Buton2}  Buton3= {Buton3}   
    Buton4= {Buton4}
    Feuil={PhotoFeille} clas={"tweet-image"} 
    commententaires={19} Stick={48} jaime={482}/> 

    <Tweet  title={"Twitter" } titleDetails={"@Twitter"} 
    tweetTitleDetails ={"Oct 29" } 
     Cn={image1}  Buton1= {Buton1}  
     Buton2= {Buton2}  Buton3= {Buton3}   
     Buton4= {Buton4}  Text={"BIG NEWS lol Jk still Twitter"} 
     commententaires={"6.8K"} 
     Stick={"6.6K"} jaime={"267.1K"}/> 

     <Tweet  title={"Twitter" } titleDetails={"@Twitter"} 
    tweetTitleDetails ={"Oct 4" }
     Cn={image1}   Buton1= {Buton1}  
     Buton2= {Buton2}  Buton3= {Buton3}  
     Buton4= {Buton4}Text={"hello literally everyone"} 
     commententaires={"116.7K"} 
     Stick={"785.7K"} jaime={"3.3M"}/> 

     <Tweet  title={"Twitter" } titleDetails={"@Twitter"} 
    tweetTitleDetails ={"Oct 4" }
     Cn={image1}  Text={"hello literally everyone"}/> 
     
    </main>
  );
}

export default Home;