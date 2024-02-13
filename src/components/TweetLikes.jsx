
 import '../style/App.css';
import { useState } from 'react';

function TweetLikes({Icon3}) {
  const [Counter, setCounter] = useState(0);
  const [Jaime, setjaime] = useState(false);
  const [changeColor, setChangeColor]= useState(false)

  const handleclick = ()=>{
    setChangeColor(!changeColor)
  }

  const SituationCount = () => {
    if (Counter === 0) {
      setCounter(Counter + 1);
      setjaime(true);
    } else if (Jaime === Jaime) {
      setCounter(Counter - 1);
      setjaime(false);
    }
  }

  return (
  <div className=" tweet-action" onClick={SituationCount}>
   {/* <img  src={IcImg} alt="" /> */}
  {/* <Icon3  onClick={handleclick}  className={`rounded-full   text-xl ${(changeColor===true)? 'bg-red-700':'bg-black-700'}`}/> */}
    <span>{Counter}</span>
    </div>
  );
}

export default TweetLikes;
