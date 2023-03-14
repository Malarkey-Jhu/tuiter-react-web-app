import React from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
// {
//   firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
//   profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
//   bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.
//         Retuits and likes are not endorsements.',
//   website: 'youtube.com/webdevtv',
//   location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
//   followingCount: 340,	followersCount: 223
// }


const Profile = () => {

  const navigate = useNavigate();
  const profile = useSelector(state => state.profile)

  return (
    <div>
      
      <div className="profile-top">
      <img className="profile-banner" src={`/images/${profile.bannerPicture}`} alt="banner"/>
      <img className="profile-avatar" src={`/images/${profile.profilePicture}`} alt="avatar"/>
      </div>

      <button type="button" className="btn btn-primary profile-edit-btn" onClick={() => navigate('/tuiter/edit-profile')}>Edit Profile</button>

      <div className="profile-content">
      <h4>{profile.name}</h4>
      <div>{profile.handle}</div>

      <p className="profile-bio">{profile.bio}</p>

      <div className="profile-attr">
        <span><i className="far fa-map"></i> {profile.location}</span>
        <span><i className="far fa-calendar-check"></i> Borned in {profile.dateOfBirth}</span>
        <span><i className="fas fa-birthday-cake"></i> Joined {profile.dateOfBirth}</span>
        <span><i className="fas fa-tv"></i> Website {profile.website}</span>
      </div>

      <div>
        <span style={{ marginRight: 40 }}><b>{profile.followingCount}</b> Following</span>
        <span><b>{profile.followersCount}</b> Followers</span>
      </div>
      </div>

    </div>
  )
}


export  default Profile;