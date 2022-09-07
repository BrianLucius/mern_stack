import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route, Link} from 'react-router-dom';
import About from './components/About';
import Teams from './components/Teams';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>I'm Home</h1>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/players' element={<Players />}/>
        <Route path='/teams' element={<Teams />}/>
        <Route path='/teams/:city' element={<Teams />}/>
        <Route path='/teams/:city/:color1' element={<Teams />}/>
      </Routes>
    </div>
  );
}

export default App;
