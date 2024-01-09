import React from "react";
import userProfil from "../models/User";
import { Link } from "react-router-dom";

function ProfilUser() {
    return(
   <main className="timeline">
       <div className="profilUser">
        <div className="profilUser-child">
        <p>{userProfil.name}</p>
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
            <h1>{userProfil.name}</h1>
            <p>{userProfil.userName}posts</p>
            <p>{userProfil.description}</p>

            <div className="">
            <span>{userProfil.abonnement} abonnements</span>
            <span>{userProfil.abonne} abonnés</span>
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