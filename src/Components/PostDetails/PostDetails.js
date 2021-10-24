import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
 const{id}=useParams();
 const[post,setPost]=useState({});
 useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res=>res.json())
  .then(data=>setPost(data))
 })
 return (
  <div>
   <h4>This is {id} details</h4>
   <h2>{post.title}</h2>
   <p>{post.body}</p>
  </div>
 );
};

export default PostDetails;