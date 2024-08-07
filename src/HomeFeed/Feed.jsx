import React from 'react';
import  { useState } from 'react';
import './Feed.css'
import me from './me.png'
import { Avatar, CardMedia, Icon ,Button} from "@mui/material";
import MediaType from "./media_components";
import Work from '@mui/icons-material/Work';
import Media from '@mui/icons-material/PermMedia';
import Article from '@mui/icons-material/Article'
import Post from "./Post";
import { blueGrey } from "@mui/material/colors";
import { StarPurple500 } from "@mui/icons-material";
import { useEffect } from 'react';
import { db } from '../Firebase';
import { addDoc,collection, getDocs } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { doc } from "firebase/firestore";


export default function Feed(){
   
    let [user_input,SetInput]=useState('')
    let [posts,setPosts]=useState([]);

    useEffect(() => {
        // Firebase listener with cleanup
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const postData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data:doc.data(),
            }));
            setPosts(postData);
          };
      
          getPosts();
       
    }, []);
   
    async function sendPost(e)  {
        e.preventDefault()
      
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                name:'salman',
                message: user_input,
                timestamp: new Date().getTime(),
            });
            alert('POST SENT')
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        

    }
    
    return(
        <div className="Feed">
            <div className='input'>
               
                <div className="input_container">
                    <Avatar  src={me}></Avatar>
                    <form>
                        <input type="text" placeholder="Start a post" value={user_input} onChange={(e)=>{
                            SetInput(e.target.value)
                        }}></input>
                        <Button variant="contained" style={{
                        marginLeft:10,
                        paddingLeft:10,
                        paddingRight:10
                        
                        }} onClick={sendPost} >Submit</Button>
                    </form>
                    
                </div>
                

            </div>
            <div className="media">
                <MediaType Icon={Media} text={'Media'} color={blueGrey[500]}></MediaType>
                <MediaType Icon={Work} text={'Jobs'} color={'#ce93d8'}></MediaType>
                <MediaType Icon={Article} text={'Article'} color={'orange'}></MediaType>
            </div>
            
            {/*Post*/}
            <Post message={user_input} ></Post>
          
            
        </div>
    )
    

}