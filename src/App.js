import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

// function Heading(props) {
//   return <h1>Hello World {props.title}</h1>
// }
function App() {
  return (
    <div>
      {/* <Heading/>
      <h1>Hello World {props.title}</h1> */}
      <Header name="Chebon" color="Green"/>
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
