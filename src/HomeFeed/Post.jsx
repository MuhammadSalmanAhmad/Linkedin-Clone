
import './Feed.css'
import me from './me.png'
import { Avatar, CardMedia, Icon ,Button} from "@mui/material";
import MediaType from "./media_components";
import PostReact from './Post_React';
import { ThumbUp, Comment,Share,Send } from '@mui/icons-material';

import React from 'react';

export default function Post({message}){

   

    return(
        <div className='Post'>
            <div className='Author'>
                <Avatar src={me}></Avatar>
                <div className='Author_info'>
                    <h3>Author</h3>
                    <p>Author Info</p>
                </div>
            </div>
            <div className='Post_body'>
                <p>The most successful people I have seen are great storytellers. In materialistic life, everything boils down to good story telling.</p>
                
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