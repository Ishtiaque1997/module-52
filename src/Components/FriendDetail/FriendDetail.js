import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
 const {friendId}=useParams();
 const [friend,setFriend]=useState({})
 useEffect(()=>{
  const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>setFriend(data))
 },[])
 const history=useHistory();
 const handleSeeFriend=()=>{
   history.push('/friends')
 }
 return (
  <div>
   <h5>Detail of {friendId} </h5>
   <h1>{friend.name}</h1>
   <h4>{friend.email}</h4>
   <h6>{friend.phone}</h6>
   <p>{friend.company?.name}</p>
   <button onClick={handleSeeFriend}>See all friends</button>
  </div>
 );
};

export default FriendDetail;