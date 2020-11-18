import React, {useState} from 'react';
import Message from './Message.js';
import './App.css';



function App() {
  let [count, setCount] = useState(1);
  let [day, setDay] = useState();
  return (
      <div className={`box ${day ? 'daylight':''}`}>
        <h1>Good {day ? 'Morning':'Night'}</h1>

        <Message counter={count}/>
        <button onClick={()=> setCount(++count)}>click me</button>
        <button onClick={()=> setDay(!day)}>change the day </button>
      </div>
  );
}

export default App;
