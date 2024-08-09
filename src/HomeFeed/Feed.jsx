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
import { doc,query, orderBy } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


export default function Feed(){
    let [user_name,SetUserName]=useState('')
    let [user_input,SetInput]=useState('')
    let [posts,setPosts]=useState([]);

    let user= useSelector(selectUser)

    useEffect(()=>{
        SetUserName(
            user_name=user.displayName
        )
    },[])
    //Firebase code to get data from backend
 
    const getPosts = async () => {
        const collectionRef = collection(db, 'posts');
        const q = query(collectionRef, orderBy('timestamp', 'desc')); // Order by timestamp in descending order
        const querySnapshot = await getDocs(q);
        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setPosts(postData);
      };
//Maintained hook to automatically get data from backend as Feed component mounts/loads 
    useEffect(() => {
        
          getPosts();
       
    }, []);
   
    //Function to send post to backend
    async function sendPost(e)  {
        e.preventDefault()
      
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                name:user_name,
                message: user_input,
                timestamp: new Date().getTime(),
            });
            alert('POST SENT')
             // Clear the input field
            SetInput('');
            getPosts() 
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
            {posts.map((post)=>{
                return <Post key={post.id} message={post.data.message} author={post.data.name}></Post>
            })}
          
            
        </div>
    )
    

}