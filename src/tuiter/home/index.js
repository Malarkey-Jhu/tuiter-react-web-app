import React from 'react';
import PostList from './post-list'
import PostSummaryList from '../post-summary-list';
import './index.css'
function HomeComponent() {

  return (
    <div className="row wd-row">
    <div className="col-10 col-lg-8 col-xl-8">
      <div className="wd-container">
      {<PostList />}
      </div>
    </div>

    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
      {<PostSummaryList />}
    </div>
  </div>
  )
}

export default HomeComponent;