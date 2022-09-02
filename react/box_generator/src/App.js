import React, { useState } from 'react';
import './App.css';
import BoxInput from './components/BoxInput';
import BoxRender from './components/BoxRender';

function App() {
  const [boxColor, setBoxColor] = useState([]);

  const addColor = ( newColor ) => {
    setBoxColor(colorList => [...colorList, newColor]);
  }

  return (
    <div className="App">
      <BoxInput onNewColor={ addColor }/>
      <BoxRender boxColor={ boxColor } />
    </div>
  );
}

export default App;
