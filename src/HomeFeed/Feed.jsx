import React from "react";
import './Feed.css'
import { Avatar, CardMedia, Icon } from "@mui/material";

export default function Feed(){
    return(
        <div className="Feed">
            <div className='input'>
                <Avatar  src=""></Avatar>
                <div className="input_container">
                    <input type="text" placeholder="Start a post"></input>
                </div>

            </div>
            <div className="media">

            </div>
        </div>
    )
}