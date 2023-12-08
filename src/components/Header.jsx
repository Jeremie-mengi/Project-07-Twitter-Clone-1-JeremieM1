import etoile from "../Icons/Timeline-Prop.png";
import Layout from "./layout";
function Header(){
return(
    < >
    <div className="header" >
    <p className="page-title">Home</p>
   <button className="top-tweets"><img   src={etoile}/></button> 
    </div>
</>
)
}
export default Header; 