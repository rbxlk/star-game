import React, { useState } from 'react';
import utils from './utils.js'
import './global.css';
import PlayNumber from './play-number.js';
import StarDisplay from './star-display.js'

// STAR MATCH - Starting Template

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarDisplay count={stars}/>
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber key={number} number={number}/>
            )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};


export default StarMatch;
