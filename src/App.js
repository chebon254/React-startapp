// import Sidebar from './components/Sidebar';
// import Main from './components/Main';
// import Header from './components/Header';
import './App.css';
// import Btn from './components/Btn';
import Heading from './Heading';
import React, {useState} from 'react';
// function Heading(props) {
//   return <h1>Hello World {props.title}</h1>
// }
function App() {
  const [word, setWord] = React.useState('Eat')

  function handleClick() {
    setWord('Drink')
  }
  return (
    <div>
      <Heading message={word + " at kempinski"}/>
      <button onClick={handleClick}>Click Here</button>
      {/* <Btn/> */}
      {/* <Heading/>
      <h1>Hello World {props.title}</h1> */}
      {/* <Header name="Chebon" color="Green"/>
      <Main />
      <Sidebar /> */}
    </div>
  );
}

export default App;
