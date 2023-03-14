import React from 'react';
import WhoToFollowList from '../who-to-follow-list';
import Profile from './profile';
import EditProfile from './edit-profile';

function ProfileComp({ isEdit = false }) {
  return (
    <div className="row wd-row">
    <div className="col-10 col-lg-8 col-xl-8">
      <div className="wd-container">
      { isEdit ? <EditProfile /> :  <Profile /> }
      </div>
    </div>

    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
      <WhoToFollowList />
    </div>
  </div>
  )
}

export default ProfileComp;