import Tweet2 from "../Icons/Tweet2.png";
import Cnn from "../images/tweet-profile-photo.png";
import Buton1 from '../Icons/Buton1.png';
import Buton2 from '../Icons/Buton2.png';
import Buton4 from '../Icons/Buton4.png';
import PhotoFeille from "../images/tweet-image.png";
import image1 from "../images/image1.png";
import { AiOutlineHeart } from "react-icons/ai";

const twe = [ 
    {
    id : 1,
   title :"CNN",
   titleDetails:"@CNN",
   timeTtweetDetails :"7m",
   avatar :Cnn,
   text:"President joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a \"major breakthrough\" that would serve to both strengthen the Us steel industry and combat the global climat crisis ",
   BoutonTweet : { 
       Icon1 : Buton1,
       Nbre1 : 57,
       
       Icon2 : Buton2,
       Nbre2 : 144,
   
       Icon3 : AiOutlineHeart ,
       Nbre3 : 184,
   
       Icon4 : Buton4
}
   
   },
   
   {
   id : 2,
   title :"The New York Times",
   titleDetails:"@nytimes",
   timeTtweetDetails :"2h",
   avatar : Tweet2,
   text:"Gardening boomed during the pandemic.Six Black writers share show has helped them re-establish, and reimagine, a connection to cultivation and the land",
   image: PhotoFeille,
   BoutonTweet : { 
       Icon1 : Buton1,
       Nbre1 : 19,
       
       Icon2 : Buton2,
       Nbre2 : 48,
   
       Icon3 : AiOutlineHeart ,
       Nbre3 : 482,
   
       Icon4 : Buton4
}
   },
   
   {
   id : 3,
   title :"Twitter",
   titleDetails:"@Twitter",
   timeTtweetDetails :"Oct 29",
   avatar : image1,
   text:"BIG NEWS lol Jk still Twitter",
   BoutonTweet :{
       Icon1 : Buton1,
       Nbre1 : "6.8K",
       
       Icon2 : Buton2,
       Nbre2 : "36.6K",
   
       Icon3 : AiOutlineHeart ,
       Nbre3 : "267.1K",
   
       Icon4 : Buton4
   }
},
   {
   id : 4,
   title :"Twitter",
   titleDetails:"@Twitter",
   timeTtweetDetails :"Oct 4",
   avatar : image1,
   text:"hello literally everyone",
   BoutonTweet : 
       {
    Icon1 : Buton1,
   Nbre1 : "118.7K",
       
       Icon2 : Buton2,
       Nbre2 : "785.4K",
   
       Icon3 : AiOutlineHeart ,
       Nbre3 : "3.3M",
   
       Icon4 : Buton4
   }
},
   {
   id : 5,
   title :"Twitter",
   titleDetails:"@Twitter",
   timeTtweetDetails :"Oct 4",
   avatar : image1,
   text:"hello literally everyone",
   image: PhotoFeille,
   BoutonTweet : 
       {
       Icon1 : Buton1,
       Nbre1 : "118.7K",
       
       Icon2 : Buton2,
       Nbre2 : "785.4K",

       Icon3 : AiOutlineHeart ,
       Nbre3 : "3.3 M",
   
       Icon4 : Buton4
}}
   ]
   export default twe;