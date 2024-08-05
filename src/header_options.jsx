import React from "react";
import './header_option.css'
import { Avatar } from "@mui/material";


export default function HeaderOptions({avatar,Icon,title}){
    return (
        <div className="headerOption">
            {Icon &&<Icon className='headeroption_icon'></Icon>}
           
            {avatar&& <Avatar src={avatar} className="avatar"></Avatar>}
            <h3 className="title">{title}</h3>
        </div>
    )

}
// //{avatar &&<img src={avatar} className="avatar"></img>}