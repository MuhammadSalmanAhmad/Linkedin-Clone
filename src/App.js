import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import me from './assets/me.png';
import Feed from './HomeFeed/Feed';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login-SignUP/Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import Widgets from './Widgets/widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Checking auth state...");
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log("User is signed in:", userAuth);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        console.log("User is signed out");
        dispatch(logout());
      }
    });
  }, [dispatch]);

  console.log("Current user state:", user);

  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <div className='app_body'>
          <Sidebar avatar={me} />
          <Feed />
          <Widgets></Widgets>
        </div>
      )}
    </div>
  );
}

export default App;