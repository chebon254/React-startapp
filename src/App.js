// import Sidebar from './components/Sidebar';
// import Main from './components/Main';
// import Header from './components/Header';
import './App.css';
import Asset from './assets/Asset.jpg'
import ReactPlayer from "react-player"
// import Homepg from './Homepg';
// import About from './About';
// import { Routes, Route, Link } from 'react-router-dom';
// import MealList from './components/MealsList';
// import Counter from './components/Counter';
// import MealsProvider from './providers/MealsProvider';
// import Btn from './components/Btn';
// import Heading from './Heading';
// import React, {useState} from 'react';
// function Heading(props) {
//   return <h1>Hello World {props.title}</h1>
// }
function App() {
  // const [word, setWord] = React.useState('Eat')

  // function handleClick() {
  //   setWord('Drink')
  // }
  const videoUrl = "https://youtu.be/cd3P3yXyx30"
  return (
    <div>
      {/* <Heading message={word + " at kempinski"}/>
      <button onClick={handleClick}>Click Here</button> */}
      {/* <Btn/> */}
      {/* <Heading/>
      <h1>Hello World {props.title}</h1> */}
      {/* <Header name="Chebon" color="Green"/>
      <Main />
      <Sidebar /> */}

      {/* <MealsProvider>
        <MealList/>
        <Counter/>
      </MealsProvider> */}

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path='/' errorElement={<Homepg />} />
        <Route path='/about' errorElement={<About />} />
      </Routes> */}
      {/* <img src={Asset} alt="Monkey Image" /> */}
      <ReactPlayer url={videoUrl} playing={false} volume={0.5}/>
    </div>
  );
}

export default App;
