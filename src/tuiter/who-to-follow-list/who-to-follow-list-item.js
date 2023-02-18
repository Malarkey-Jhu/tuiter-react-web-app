import React from 'react'

function WhoToFollowListItem({who = {
  avatarIcon: "nasa.png", 
  userName: "NASA", 
  handle: "NASA" 
}}) {

  return (
  <div className="wd-follow-item">
    <img src={`/images/${who.avatarIcon}`} alt={`${who.userName}`} />
    <div className="wd-follow-name">
      <div>{who.userName} <i className="fas fa-check-circle fa-sm"></i></div>
      <div>@{who.handle}</div>
    </div>
    <div className="wd-follow-btn">
      <button type="button" className="rounded-pill btn btn-dark">Follow</button>
    </div>
  </div>
  )
}

export default WhoToFollowListItem;