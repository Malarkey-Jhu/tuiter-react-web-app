import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import cx from "classnames";

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];

 return (
    <>
    <ul className="list-group">
      <li className="list-group-item"><i className="fab fa-2x fa-tumblr-square"></i></li>
      <li className={
        cx("list-group-item", {
          "active": active === 'home'
          })
      }><i className="fas fa-home"></i>
        <Link to={'/tuiter/home'}>
        <span className="d-sm-none d-xl-inline-block">
          Home
        </span>
        </Link>
      </li>
      <li className={
        cx("list-group-item", {
          "active": active === 'explore'
          })
        }><i className="fas fa-hashtag"></i>
        <Link to="/tuiter/explore">
        <span className="d-sm-none d-xl-inline-block">
          Explore
        </span>
        </Link>
      </li>
      <li className="list-group-item"><i className="fas fa-comment-dots">
        </i>
        <Link to='/'>
          <span className="d-sm-none d-xl-inline-block">Labs</span>
        </Link>
      </li>

      <li className="list-group-item"><i className="fas fa-bell"></i>
        <span className="d-sm-none d-xl-inline-block">Notifications</span>
      </li>
      <li className="list-group-item"><i className="fas fa-envelope">
  
        </i> <span className="d-sm-none d-xl-inline-block">Messages</span></li>
      <li className="list-group-item"><i className="fas fa-bookmark">
  
        </i><span className="d-sm-none d-xl-inline-block">Bookmarks</span></li>
      <li className="list-group-item"><i className="fas fa-list-alt">
  
        </i><span className="d-sm-none d-xl-inline-block">Lists</span></li>
      <li className={cx("list-group-item", {
        "active": active.includes('profile')
      })}><i className="fas fa-user"></i>
        <Link to='/tuiter/profile'><span className="d-sm-none d-xl-inline-block">Profile</span></Link>
      </li>
      <li className="list-group-item"><i className="fas fa-comment-dots">
        </i>
        <span className="d-sm-none d-xl-inline-block">More</span>
      </li>
      
    </ul>
  
    <button type="button" className="tweet w-100 rounded-pill btn mt-3">Tweet</button>
    </>)
};
export default NavigationSidebar;