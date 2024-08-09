
import './Feed.css'
import me from './me.png'
import { Avatar, CardMedia, Icon ,Button} from "@mui/material";
import MediaType from "./media_components";
import PostReact from './Post_React';
import { ThumbUp, Comment,Share,Send } from '@mui/icons-material';
import  { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

export default function Post({message,author}){
   const user = useSelector(selectUser)

    return(
        <div className='Post'>
            <div className='Author'>
                <Avatar src={user.photoUrl}></Avatar>
                <div className='Author_info'>
                    <h3>{author}</h3>
                    <p>Author Info</p>
                </div>
            </div>
            <div className='Post_body'>
                <p>{message}</p>
                
            </div>
            <div className='Post_React'>
                  <PostReact text='like' Icon={ThumbUp} ></PostReact>
                  <PostReact text='Comment' Icon={Comment}></PostReact>
                  <PostReact text='Share' Icon={Share}></PostReact>
                  <PostReact text='Send' Icon={Send}></PostReact>
            </div>
        </div>
      
            
    
    )
}