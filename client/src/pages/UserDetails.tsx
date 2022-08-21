import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>this is student details {id}</h1>
    </div>
  );
};

export default UserDetails;
