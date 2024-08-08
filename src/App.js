import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './App.css';
import Header from './Header';
import Test from './side';
import Sidebar from './Sidebar';
import me from './assets/me.png'
import Feed from './HomeFeed/Feed'
import Post from './HomeFeed/Post';
import { selectUser } from './features/userSlice';
import { login, logout } from './features/userSlice';
import Login from './Login-SignUP/Login';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <Header></Header>
      {
        !user ? <Login></Login>: (
          <div className='app_body' >
          <Sidebar avatar={me}></Sidebar>
          <Feed>
          </Feed>
          
        </div>
        )
      }
     
    </div>
    
  );
}

export default App;
/*

 {
        !user ? <h1>user not available</h1> : (
          <div className='app_body' >
          <Sidebar avatar={me}></Sidebar>
          <Feed>
          </Feed>
          
        </div>
        )
      }

*/