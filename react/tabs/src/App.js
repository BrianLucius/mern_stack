import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Tabs from './components/Tabs';
import React from 'react';

const tabs = [{title: "Tab 1", content:"Content for tab 1"},
              {title: "Tab 2", content:"Content for tab 2"},
              {title: "Tab 3", content:"Content for tab 3"},
              {title: "Tab 4", content:"Content for tab 4"}];


function App() {
  const [content, setContent] = useState("");

  const updateContent = ( content ) => {
    setContent(content);
  }

  return (
    <div className="App">
      <Tabs tabs={ tabs } onNewContent={ updateContent }/>
      <Content content={ content }/>
    </div>
  );
}

export default App;
