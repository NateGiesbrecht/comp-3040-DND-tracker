import logo from './logo.svg';
import './App.css';
import Home from './Home';
import PlayerHome from './Player/PlayerHome';
import DMHome from './DM/DMHome';
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} /> 
        <Route exact path='/Player' element={<PlayerHome/>} /> 
        <Route exact path='/DM' element={<DMHome/>} /> 
      </Routes>
    </>
    
  
  );
}

export default App;
