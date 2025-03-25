import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, photo, bio }) => {
  return (
    <div className="profile-card">
      <img src={photo} alt={`${name}'s profile`} className="profile-photo" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;