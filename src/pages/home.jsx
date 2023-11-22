import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweet from '../components/Tweet';

function Home() {
  return (
    <main className="timeline">
    <Header/>
    <TweetEditor/>
    <Tweet  title="CNN" />
    <Tweet title="The New York Times"/>
    </main>
  );
}

export default Home;