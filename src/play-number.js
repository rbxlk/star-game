import React from "react"
import "./global.css"

// Color Theme
    const colours = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };
  
const PlayNumber = (props) => (
    
    <button
        className="number"
        onClick={() => console.log('Num', props.number)}
        style={{backgroundColor: colours[props.status]}}
    >
        {props.number}
    </button>
)

export default PlayNumber