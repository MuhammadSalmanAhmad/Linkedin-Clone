import React, { useState } from "react";
import './sidebar.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardMedia, Icon } from "@mui/material";
import me from './assets/me.png'
import { grey } from "@mui/material/colors";
import Network from '@mui/icons-material/SupervisorAccount'
import Recent from "./sidebar_bottom";



export default function Sidebar({avatar}) {
    let [user_name, SetName] = useState("salman")
    let [user_email, setEmail] = useState("isalman.ahmad01@gmail.com")
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvk0gIBR6oa0q2oA974eA7fs7IgY9G_YeSQ&s"></img>
                <Avatar src={avatar} sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    alignItems: "center"
                }}></Avatar>
                

                <h2>{user_name}</h2>
                <h4>{user_email}</h4>

            </div>
            <div className="Sidebar_bottom" style={{
                border: '2px solid grey',
                borderRadius: 10,
                marginTop: 20,
                padding: 10,
                textAlign:'left'
            }}>
                <p style={{
                    color:'gray',
                    marginBottom: 5,
                    fontSize:15
                }}>
                    Recent
                </p>
                <Recent group_name={'Django'}></Recent>
                <Recent group_name={'React'}></Recent>
                <Recent group_name={'Python'}></Recent>
               

            </div>
        </div>
    );
}

/*
<Card sx={{
                    width: 275,
                    height: 275,
                    borderRadius: 10,
                    boxShadow: 3,
                    marginTop:2,
                    marginBottom: 10,
                    backgroundColor: 'gray'
                }}>
                    <CardMedia image={me} sx={{
                        height: 150,
                        width: 150,
                        borderRadius: 50,
                        alignItems:"center"
                    }}></CardMedia>
                    <CardContent sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }
                    }>
                        <Typography variant='h5' color='textSecondary'>Linkedin News</Typography>
                        <Typography variant='h6' color='textSecondary'>Top news</Typography>
                    </CardContent>
                </Card>



*/