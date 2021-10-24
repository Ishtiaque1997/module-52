import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
 const{name,id,phone,address}=props.friend;
 const history=useHistory();
 const friendStyle={
  border:'3px solid goldenrod',
  padding:'10px',
  borderRadius:'10px'

 }
 const handleFriendClick=()=>{
   history.push(`/friend/${id}`)
 }

 const url=`/friend/${id}`;
 return (
  <div style={friendStyle}>
   <h3>I am {name}{id}</h3>
   <h5>Call me :{phone}</h5>
   <p><small>{address.city}</small></p>
   <Link to ={url}>Visit me</Link>
   <br />
   {/* <Link to={url}>
    <button>Visit me</button>
   </Link> */}
   <br />
   <button onClick={handleFriendClick}>Visit me 2</button>
  </div>
 );
};

export default Friend;