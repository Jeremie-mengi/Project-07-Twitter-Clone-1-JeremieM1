import React from "react";
import userProfil from "../models/User";
import { useParams } from "react-router-dom";

function ProfilUser() {
const {title} = useParams();
// const profilDetails = ()
    return(
   <main className="timeline">
       <div className="profilUser">
        <div className="profilUser-child">
        <p>{title}</p>
        <p className="posts">{userProfil.postes}posts</p>
        </div>
        </div>
        
        <div className="parentImgCouv">
        <div className="ImgCouv">
        {/* <img src={userProfil.imgCouverture}/> */}
        </div>

        <div className="ParentAvat" >

            <div className="ParentAvat-Child">

            <div className="ParentAvat-Child1">
            <a href="#">
            <img src={userProfil.userImage} alt="" className="profilImage"/>
            </a>
            <h1 className="profilName">{userProfil.name}</h1>
            <p className="profDes">{userProfil.userName}</p>
            <p>{userProfil.description}</p>
            <div className="blocAbon">
            <a href="#" className="AbonLink">
            {userProfil.abonnement} 
            <span className="AbonText">abonnements</span>
            </a>
            <a href="#" className="AbonLink">
            {userProfil.abonne}
            <span className="AbonText" > abonnés</span>
            </a>
           

            </div>
            </div>

            <div className="prEd">
            <a href="#" className="profEdit1">
                Profile editor
            </a> 
            </div>
            </div>



        </div>
      
       </div>
    </main>

    )
}
export default ProfilUser;