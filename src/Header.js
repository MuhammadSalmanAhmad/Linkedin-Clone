
import React from "react"
import SearchIcon from "@mui/icons-material/Search";
import Linkedin from './assets/linkedin.png'; // Updated path
import './header.css'; // Updated path
import HeaderOptions from "./header_options";
import homeIcon from '@mui/icons-material/Home'
import Network from '@mui/icons-material/SupervisorAccount'
import job_icon from '@mui/icons-material/Work'
import Messaging from '@mui/icons-material/Chat'
import Notifications from '@mui/icons-material/Notifications'
import photo from './assets/me.png';
import { useDispatch } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./Firebase";

function Header() {

    
    const dispatch = useDispatch();
    const logout_of_App=()=>{
        dispatch(logout());
        signOut(auth).then(() => {
            console.log("User signed out successfully");
            alert("Successfully logged out")
          }).catch((error) => {
            console.error("Error signing out: ", error);
          });
    }

    return (
        <div className="header">
            <div className="header_left">
                <img src={Linkedin} alt="Company Logo" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="search" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOptions title='Home' Icon={homeIcon}></HeaderOptions>
                <HeaderOptions title='My network' Icon={Network}></HeaderOptions>
                <HeaderOptions title='Jobs' Icon={job_icon}></HeaderOptions>
                <HeaderOptions tittle='messages' Icon={Messaging}></HeaderOptions>
                <HeaderOptions title= 'Notifications' Icon={Notifications}></HeaderOptions>
                <HeaderOptions title='logout'avatar={photo} onClick={logout_of_App}></HeaderOptions>
            

            </div>
        </div>
    );
}

export default Header;

/*
<div className="header">
            <div className="header_left">
                <img src={Linkedin} alt="Company Logo" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="search" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOptions title='Home' Icon={homeIcon}></HeaderOptions>
                <HeaderOptions title='My network' Icon={Network}></HeaderOptions>
                <HeaderOptions title='Jobs' Icon={job_icon}></HeaderOptions>
                <HeaderOptions tittle='messages' Icon={Messaging}></HeaderOptions>
                <HeaderOptions title= 'Notifications' Icon={Notifications}></HeaderOptions>
                <HeaderOptions title='logout'avatar={photo} onClick={logout}></HeaderOptions>
            

            </div>
        </div>

*/