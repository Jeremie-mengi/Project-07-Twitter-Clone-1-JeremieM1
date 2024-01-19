import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweet from '../components/Tweet';
import CloneProvider from '../componentContext/cloneContext';
function Home() {
  return (
    <main className="timeline">

    <Header/>
    <CloneProvider >
    <TweetEditor/>
    <Tweet/>
  </CloneProvider>
    </main>
  );
}

export default Home;