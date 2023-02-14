const NavigationSidebar = () => {
  return(`
  <ul class="list-group">
    <li class="list-group-item"><i class="fab fa-2x fa-tumblr-square"></i></li>
    <li class="list-group-item"><i class="fas fa-home"></i>
      <span class="d-sm-none d-xl-inline-block">Home</span>
    </li>
    <li class="list-group-item active"><i class="fas fa-hashtag"></i>
      <span class="d-sm-none d-xl-inline-block">Explore</span>
    </li>
    <li class="list-group-item"><i class="fas fa-bell"></i>

      <span class="d-sm-none d-xl-inline-block">Notifications</span>
    </li>
    <li class="list-group-item"><i class="fas fa-envelope">

      </i> <span class="d-sm-none d-xl-inline-block">Messages</span></li>
    <li class="list-group-item"><i class="fas fa-bookmark">

      </i><span class="d-sm-none d-xl-inline-block">Bookmarks</span></li>
    <li class="list-group-item"><i class="fas fa-list-alt">

      </i><span class="d-sm-none d-xl-inline-block">Lists</span></li>
    <li class="list-group-item"><i class="fas fa-user">

      </i><span class="d-sm-none d-xl-inline-block">Profile</span></li>
    <li class="list-group-item"><i class="fas fa-comment-dots">
      </i>
      <span class="d-sm-none d-xl-inline-block">More</span>
    </li>
  </ul>

  <button type="button" class="tweet w-100 rounded-pill btn mt-3">Tweet</button>
  `);
 }
 export default NavigationSidebar;