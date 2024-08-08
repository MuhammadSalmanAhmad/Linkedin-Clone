
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

function Header() {
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
                <HeaderOptions title='ME'avatar={photo}></HeaderOptions>
            

            </div>
        </div>
    );
}

export default Header;

