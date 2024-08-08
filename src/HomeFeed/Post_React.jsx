import React from "react";
import './Feed.css'
import me from './me.png'
import { Avatar, CardMedia, Icon ,Button} from "@mui/material";
import { purple } from "@mui/material/colors";


export default function PostReact({Icon,text,color}){
    return(
        <div className="media-type">
            {Icon && <Icon sx={{color:color}}></Icon>}
            <h3 style={{
                fontWeight:"normal",
                marginLeft:10
            }}>{text}</h3>
                </div>
    )
}