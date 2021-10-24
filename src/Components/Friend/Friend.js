import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
 const{name,id,phone,address}=props.friend;
 const friendStyle={
  border:'3px solid goldenrod',
  padding:'10px',
  borderRadius:'10px'

 }
 const url=`/friend/${id}`;
 return (
  <div style={friendStyle}>
   <h3>I am {name}{id}</h3>
   <h5>Call me :{phone}</h5>
   <p><small>{address.city}</small></p>
   <Link to ={url}>Visit me</Link>
  </div>
 );
};

export default Friend;