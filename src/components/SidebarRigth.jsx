import Cnn from "../images/tweet-profile-photo.png";
import Tweet2 from "../Icons/Tweet2.png";
import image1 from "../images/image1.png";
import More from "../Icons/More-2.png";
import Setting from "../Icons/Settings.png";
import Follow from "./Follow";




function SidebarRigth() {
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
        
        <div className="trends-child1-1">
    <p>
    <span className="TredingTurk">Trending in Turkey</span>
    <h2 >#SQUID</h2> 
    <span className="TredingTurk" >2,066 Tweets</span> 
    </p> 

    <button className="point"><img src={More}alt="" /></button>  

     </div>

    <div className="trends-child1-1">
    <p>
    <span className="TredingTurk">Trending in Turkey</span>
    <h2 >#SQUID</h2> 
    <span className="TredingTurk">2,066 Tweets</span> 
    </p>  

    <button className="point"><img src={More} alt="" /></button> 

    </div> 
        
    <div className="trends-child1-1">
    <p>
    <span className="TredingTurk">Trending in Turkey</span>
    <h2 >#SQUID</h2> 
    <span className="TredingTurk">2,066 Tweets</span> 
    </p>  

    <button className="point"><img src={More}alt="" /></button> 

    </div>
       
    <div className="trends-child1-1">
    <p>
    <span className="TredingTurk">Trending in Turkey</span>
    <h2 >#SQUID</h2> 
    <span className="TredingTurk">2,066 Tweets</span> 
    </p>
      
    <button className="point"><img src={More}alt="" /></button>  
    </div>  
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