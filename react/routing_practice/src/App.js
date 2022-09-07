import React from 'react';
import {Routes, Route} from "react-router-dom";
import {useParams} from "react-router";
import './App.css';

const Home = (props) => {
  return (
    <h1>Welcome!</h1>
  );
}

const Param = (props) => {
  const {param} = useParams();
  if (isNaN(param)) {
    return (<h1>The word is: {param}</h1>)
  } else {
    return (<h1>The number is: {param}</h1>)
  }
}

const ParamColors = (props) => {
  const {param, color1, color2} = useParams();
  if (isNaN(param)) {
    return (
      <h1 style={{color: color1, backgroundColor: color2, padding: "25px", border:"2px solid grey"}}>The word is: {param}</h1>
  )} else {
    return (
      <h1 style={{color: color1, backgroundColor: color2, padding: "25px", border:"2px solid grey"}}>The number is: {param}</h1>
  )}
}

function App() {
  return (
    <div className="App">
      {/* <h1>Routing Practice</h1> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:param" element={<Param />} />
        <Route path="/:param/:color1" element={<ParamColors />} />
        <Route path="/:param/:color1/:color2" element={<ParamColors />} />
      </Routes>
    </div>
  );
}

export default App;
