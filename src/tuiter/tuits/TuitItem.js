import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

function PostItem({post}) {
  
  const dispatch = useDispatch();
  const deleteTuitHandler = () => {
    dispatch(deleteTuitThunk(post._id))
  }

  return (
  <div className="wd-content">
  <img className="wd-avatar" src={`/images/${post.image}`} alt="" width={60} height={60} style={{ objectFit: 'contain'}} />
  <div className="wd-content-right">
    <i className="wd-content-delete-icon bi bi-x-lg" onClick={ deleteTuitHandler}></i>
    <div>
      <div className="wd-post-author">{post.userName} <span className="wd-handle">{post.handle} · {post.time}</span></div>
      <p className="wd-content-paragraph">{post.tuit}</p>
    </div>
    <ul className="wd-btns">
      <TuitStats tuit={post}  />
    </ul>
  </div>
  </div>
  )
}

export default PostItem;