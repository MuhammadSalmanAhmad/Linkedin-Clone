import React from "react";
import Icon from '@mui/material/Icon';
import './sidebar.css'
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";



export default function Recent({group_name}){
return(
    <div className="Recent">
     <SupervisorAccount style={{
        color:"gray"
     }}></SupervisorAccount>
    <h4>
        {group_name}
    </h4>

   
    </div>
)
}