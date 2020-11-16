import './App.css';
import MyButton from './MyButton';
import Counter from './Counter';
import React, { useState } from 'react';


//this is a component
//A component is just a function that returns some JSX
//JSX is basicly some html code with the additional option to write JavaScript in it


function App() {
  //this is how we make state in functional components:
  const [counter, setCounter] = useState({count:0, name:"points"})

  const test = "hello world of react";
  const buttonText = "click me"
  const goToInitialState= function(){
    setCounter({count:0, name:"points"})
  }
  const incrementCounter = function(){
     // const copyOfArray = [...array];
    //WRONG!!!:
    //const copyOfCounter= counter;
    //RIGHT way:
    // we need to copy counter in order to be able to change it (because it is an object)
    const copyOfCounter = {...counter};
    //now we can change the copied object
    copyOfCounter.count = counter.count+1;
    //use the setCounter function to change the actual counter
    setCounter(copyOfCounter);
  }
  const decrementCounter = function(){
    const copyOfCounter = {...counter};
    copyOfCounter.count = counter.count-1;
    setCounter(copyOfCounter);
  }
  return (
    <div>
      <h1>title</h1>
      {test}
 
      <MyButton clickFunction={incrementCounter} label="get points" text="increment counter"/>
      <MyButton clickFunction={decrementCounter} label="loose points" text="decrement counter"/>
 
      <Counter data={counter}></Counter>
    </div>
  );
}

// The App component like the buttons would be comming from an API
// function App() {
//   const test = "hello world of react";
//   const buttonText = "click me"
//   const data =[
//     {
//       l:"cool button",
//       t:"click me"
//     },
//     {
//       l:"ugly button",
//       t:"don't click me!!"
//     }
//   ]
//   return (
//     <div>
//       <h1>title</h1>
//       {test}
//       {
//         data.map(function(bdata){
//           return <MyButton label={bdata.l} text={bdata.t}/>
//         })
//       }
//       <Counter></Counter>
//     </div>
//   );
// }

export default App;
