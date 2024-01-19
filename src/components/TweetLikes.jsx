
 import '../style/App.css';
import { useState } from 'react';

function TweetLikes({IcImg,Nb}) {
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
      {/* <div className="tweet-actions">
        <button className="tweet-action" onClick={SituationCount}>
          <span>{Counter}</span>
        </button> */}

<button className='tweet-action ImgTweet' onClick={SituationCount}>
<img src={IcImg} className='ImgTweet' />
{Counter}
</button>

    
    </>
  );
}

export default TweetLikes;
