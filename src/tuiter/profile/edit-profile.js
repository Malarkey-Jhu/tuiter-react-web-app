import React, { useState } from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveProfile } from "../reducers/profile-reducer";
// {
//   firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
//   profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
//   bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.
//         Retuits and likes are not endorsements.',
//   website: 'youtube.com/webdevtv',
//   location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
//   followingCount: 340,	followersCount: 223
// }



const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)

  const [name, setName] = useState(profile.name)
  const [bio, setBio] = useState(profile.bio)
  const [location, setLocation] = useState(profile.location)
  const [birth, setBirth] = useState(profile.dateOfBirth)
  const [website, setWebsite] = useState(profile.website)

  const onSaveClick = () => {
    dispatch(saveProfile({
      name, bio, location, dateOfBirth: birth, website
    }))
    navigate('/tuiter/profile')
  }

  return (
    <div>
      
      <div className="profile-top">
      <img className="profile-banner" src={`/images/${profile.bannerPicture}`} alt="banner"/>
      <img className="profile-avatar" src={`/images/${profile.profilePicture}`} alt="avatar" />
      </div>

      <button onClick={onSaveClick} type="button" className="btn btn-primary profile-edit-btn">Save Profile</button>

      <div className="profile-content ">

      <div className="form-floating" data-bs-theme="dark">
        <input className="form-control profile-edit-form-control" value={name} id="profile-name" onChange={e => setName(e.target.value)}></input>
        <label htmlFor="profile-name">Name</label>
      </div>


      <div className="form-floating" data-bs-theme="dark">
          <textarea style={{ height: 100, marginTop: 10 }} className="form-control profile-edit-form-control" value={bio} id="profile-bio" onChange={e => setBio(e.target.value)}></textarea>
          <label htmlFor="profile-bio">Bio</label>
        </div>

      <div className="profile-attr">
        <div className="form-floating" data-bs-theme="dark">
          <input className="form-control profile-edit-form-control" value={location} id="profile-location"  onChange={e => setLocation(e.target.value)}></input>
          <label htmlFor="profile-location">Location</label>
        </div>
        <br />
        <div className="form-floating" data-bs-theme="dark">
          <input className="form-control profile-edit-form-control" value={birth} id="rofile-birth" onChange={e => setBirth(e.target.value)}></input>
          <label htmlFor="profile-birth">Date of birth</label>
        </div>
        <br />
        <div className="form-floating" data-bs-theme="dark">
          <input className="form-control profile-edit-form-control" value={website} id="rofile-website" onChange={e => setWebsite(e.target.value)}></input>
          <label htmlFor="profile-website">website</label>
        </div>

        
      </div>

    
      </div>

    </div>
  )
}


export  default EditProfile;