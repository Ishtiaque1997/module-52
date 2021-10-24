import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Pots = () => {
 const[posts,setPosts]=useState([]);
 useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>setPosts(data));
 },[])
 return (
  <div>
   {
    posts.map(post=><Post post={post}></Post>)
   }
  </div>
 );
};

export default Pots;