import React from 'react';
import Tweet from './Tweet';

function App() {
  return (
    <div>
      <Tweet
        name="Tyler Ortolano"
        username="to4"
        date={new Date().toDateString()}
        message="I love Pizza!!!"
      />
      <Tweet
        name="Jim Thompson"
        username="jt4"
        date={new Date().toDateString()}
        message="Why DID the chicken cross the road?"
      />
      <Tweet
        name="Sarah Smith"
        username="SS4"
        date={new Date().toDateString()}
        message="we love pandas!"
      />
    </div>
}

export default App;
