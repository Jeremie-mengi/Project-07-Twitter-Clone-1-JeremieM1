import Ver from "../Icons/Verified.png";
function Follow({imageAv,title,titleMail}) {
    return(
<>

<div className="ContainerAvatar">
<a href="#" className="avatar" >
<img src={imageAv} />
</a>
 
 <div className="Cont" >
  <h3 className='Conth3'>{title}
 <span><img src={Ver}/></span>
  </h3>

  <span id="Bradley">{titleMail}</span>

 </div>

</div>
</>


    )
}
export default Follow; 