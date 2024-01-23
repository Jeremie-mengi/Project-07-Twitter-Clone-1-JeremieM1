
 import '../style/App.css';
import { useState } from 'react';

function TweetLikes({IcImg,Icon3}) {
  const [Counter, setCounter] = useState(0);
  const [Jaime, setjaime] = useState(false);
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
    <>
    
<button className='tweet-action' onClick={SituationCount}>
{IcImg && <img src={IcImg} />}
{Icon3 && <Icon3 className="ImgTweet"/>}
{Counter}
</button>

    
    </>
  );
}

export default TweetLikes;
