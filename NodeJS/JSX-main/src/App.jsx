import './App.css';
import Navbar from './Navbar';
import Serie from './Serie';
import Movie from "./Movie";
import Action from './Actions';
import Research from './Research';
import NewTV from './NewTV';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Research></Research>
      <Serie></Serie>
      <Movie></Movie>
      <Action></Action>
      <NewTV></NewTV>
      

    </div>
  );
}

export default App;


