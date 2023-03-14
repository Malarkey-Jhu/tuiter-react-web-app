import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike } from '../reducers/tuits-reducer'
import cx from 'classnames'

const TuitStats = ({ _id, replies, retuits, likes, liked }) => {

  const dispatch = useDispatch();
  const onHeartClick = () => {
    dispatch(toggleLike(_id))
  }

  return (
    <>
      <li><i className="far fa-comment"></i> <span>{replies}</span></li>
      <li><i className="fas fa-retweet"></i> <span>{retuits}</span></li>
      <li onClick={onHeartClick}><i className={cx("fa-heart", {
        "fas": liked,
        "far": !liked,
        "red": liked
      })}></i> <span>{likes}</span></li>
      <li><i className="fas fa-share"></i> </li>
    </>
  )
}

export default TuitStats