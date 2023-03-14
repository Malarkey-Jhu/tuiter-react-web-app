import React from 'react';
import TuitsList from '../tuits/TuitsList';
import WhoToFollowList from '../who-to-follow-list';
import WhatsHappening from './whats-happening';
import './index.css'
function HomeComponent() {

  return (
    <div className="row wd-row">
    <div className="col-10 col-lg-8 col-xl-8">
      <div className="wd-container">
      <WhatsHappening />
      <TuitsList />
      </div>
    </div>

    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
      <WhoToFollowList />
    </div>
  </div>
  )
}

export default HomeComponent;