import React from "react";
import userProfil from "../models/User";

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
            <img src={userProfil.userImage} alt="" className="profilImage"/>
            <p>{userProfil.name}</p>
            <p>{userProfil.abonnement}</p>
            </div>
            </div>


        </div>
      
       </div>
    </main>

    )
}
export default ProfilUser;