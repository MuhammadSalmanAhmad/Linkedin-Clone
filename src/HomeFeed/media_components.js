import React from "react";
import './Feed.css'
import me from './me.png'
import { Avatar, CardMedia, Icon ,Button} from "@mui/material";
import { purple } from "@mui/material/colors";




export default function MediaType({Icon,text}){
    return(
        <div className="media-type">
            {Icon && <Icon style={{color:purple}}></Icon>}
            <h3 style={{
                marginLeft:10
            }}>{text}</h3>
                </div>
    )
}