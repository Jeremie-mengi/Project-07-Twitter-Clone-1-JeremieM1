import Cnn from "../images/tweet-profile-photo.png";
import React from "react";
import Tweet2 from "../Icons/Tweet2.png";
import image1 from "../images/image1.png";
import Setting from "../Icons/Settings.png";
import Follow from "./Follow";
import Trends from "../models/Trends";
function SidebarRigth() {
    const trends = Trends.map((key)=>(
  <div className="trends-child1-1">
    <p>
    <span className="TredingTurk">{key.name}</span>
    <h2 >{key.Squid}</h2> 
    <span className="TredingTurk" >{key.Montant}</span> 
    </p> 

    <button className="point"><img src={key.Img}alt="" /></button>  

     </div>
    ))
    return (
 <main className="trends">

    <input type="text"  className="inputSeach" placeholder="Search Twitter"/>
  

    <div className="trends-child1">

    <div  className="trends-child1-1">
        <p >
        <h1>Trends for you</h1>
        </p>
        <button className="point"> <img src={Setting} alt="" /></button>
        </div>
        
       {trends}
    <h3><a href="#" className="ShowMore">Show mee</a></h3>

    </div>


    
    <div className="trends-child1">

    <div  className="trends-child1-1">
        <h1>Who to follow</h1>
    </div>

        <div className="trends-child1-1">
        <Follow imageAv = {Tweet2}  title ="The New York Times"  titleMail= "@nytimes" />
     

    <button className="Follow">Follow</button>  

     </div>

    <div className="trends-child1-1">
    <Follow imageAv = {Cnn}  title ="CNN"  titleMail= "@CNN"/>

    <button className="Follow">Follow</button> 

    </div> 
        
    <div className="trends-child1-1">
    <Follow imageAv = {image1}  title ="Twitter"  titleMail= "@Twitter"/>
    
    <button className="Follow">Follow</button> 

    </div>
       <h3><a href="#" className="ShowMore">Show mee</a></h3>
    </div>
<p className="TredingTurk">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quos, possimus delectus quia alias nemo voluptates animi exercitationem adipisci aperiam nihil explicabo tempore. Architecto dolorem, voluptas vitae ex culpa id.</p>

</main>
    )
    
}
export default SidebarRigth;