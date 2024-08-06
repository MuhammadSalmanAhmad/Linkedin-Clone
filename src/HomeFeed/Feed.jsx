import React from "react";
import './Feed.css'
import me from './me.png'
import { Avatar, CardMedia, Icon ,Button} from "@mui/material";
import MediaType from "./media_components";
import Work from '@mui/icons-material/Work';
import Media from '@mui/icons-material/PermMedia';
import Article from '@mui/icons-material/Article'
import Post from "./Post";




export default function Feed(){
    return(
        <div className="Feed">
            <div className='input'>
               
                <div className="input_container">
                    <Avatar  src={me}></Avatar>
                    <input type="text" placeholder="Start a post"></input>
                    <Button variant="contained" style={{
                        marginLeft:10,
                        paddingLeft:10,
                        paddingRight:10
                        
                    }}>Submit</Button>
                </div>
                

            </div>
            <div className="media">
                <MediaType Icon={Media} text={'Media'}></MediaType>
                <MediaType Icon={Work} text={'Jobs'}></MediaType>
                <MediaType Icon={Article} text={'Article'}></MediaType>
            </div>
            
            {/*Post*/}
            <Post></Post>
          
            
        </div>
    )
}