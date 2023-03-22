import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike } from '../reducers/tuits-reducer'
import { updateTuitThunk } from "../../services/tuits-thunks";
import cx from 'classnames'

const TuitStats = ({ tuit }) => {

  const dispatch = useDispatch();
  const onHeartClick = () => {
    let updatedTuit = {
      ...tuit,
      likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
      liked: !tuit.liked
    }
    dispatch(updateTuitThunk(updatedTuit))
  }
  const onDisLikeClick = () => {
    let updatedTuit = {
      ...tuit,
      dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
      disliked: !tuit.disliked
    }
    dispatch(updateTuitThunk(updatedTuit))
  }

  return (
    <>
      <li><i className="far fa-comment"></i> <span>{tuit.replies}</span></li>
      <li><i className="fas fa-retweet"></i> <span>{tuit.retuits}</span></li>
      <li onClick={onHeartClick}><i className={cx("fa-heart", {
        "fas": tuit.liked,
        "far": !tuit.liked,
        "red": tuit.liked
      })}></i> <span>{tuit.likes}</span></li>
      <li onClick={onDisLikeClick}><i className={cx("fa-thumbs-down", {
        "fas": tuit.disliked,
        "far": !tuit.disliked,
        "red": tuit.disliked
      })}></i> <span>{tuit.dislikes}</span></li>
      <li><i className="fas fa-share"></i> </li>
    </>
  )
}

export default TuitStats