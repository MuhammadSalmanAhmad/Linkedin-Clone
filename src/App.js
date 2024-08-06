import React from 'react';

import './App.css';
import Header from './Header';
import Test from './side';
import Sidebar from './Sidebar';
import me from './assets/me.png'
import Feed from './HomeFeed/Feed'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className='app_body' >
        <Sidebar avatar={me}></Sidebar>
        <Feed></Feed>
      
      </div>
    </div>
    
  );
}

export default App;
