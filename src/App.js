import './App.css';
import './MyButton';
import MyButton from './MyButton';


//this is a component
//A component is just a function that returns some JSX
//JSX is basicly some html code with the additional option to write JavaScript in it

function App() {
  const test = "hello world of react";
  const buttonText = "click me"
  return (
    <div>
      <h1>title</h1>
      {test}
      <MyButton label="cool button" text={buttonText}></MyButton>
      <MyButton label="ugly button" text="don't click!!!"></MyButton>
    </div>
  );
}

export default App;
