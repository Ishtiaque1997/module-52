import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
 const {url}=useParams();
 return (
  <div>
   <h5>Detail of {url} coming soon</h5>
  </div>
 );
};

export default FriendDetail;