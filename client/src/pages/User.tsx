import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>this is users details {id}</h1>
    </div>
  );
};

export default User;
