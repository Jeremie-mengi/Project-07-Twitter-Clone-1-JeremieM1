import Icon9 from '../Icons/Icon9.png';
function Follow({imageAv,title,titleMail}) {
    return(
<>

<div className="ContainerAvatar">
<a href="#">
<img src={imageAv} className="avatar" />
</a>
 
 <div className="Cont" >

  <h3>{title}
  <span><img src={Icon9}/></span>
  </h3>

  <span id="Bradley">{titleMail}</span>

 </div>

</div>
</>


    )
}
export default Follow; 