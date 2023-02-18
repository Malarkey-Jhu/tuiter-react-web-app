function WhoToFollowListItem(who) {
  return `
  <div class="wd-follow-item">
    <img src="/images/${who.avatarIcon}" alt="${who.userName}">
    <div class="wd-follow-name">
      <div>${who.userName} <i class="fas fa-check-circle fa-sm"></i></div>
      <div>@${who.handle}</div>
    </div>
    <div class="wd-follow-btn">
      <button type="button" class="rounded-pill btn btn-dark">Follow</button>
    </div>
  </div>
  `
}

export default WhoToFollowListItem;