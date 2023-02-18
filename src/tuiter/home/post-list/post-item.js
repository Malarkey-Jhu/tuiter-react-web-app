import React from "react";

function PostItem({post}) {
  return (
  <div className="wd-content">
  <img className="wd-avatar" src={`/images/${post.avatar}`} alt="" width="48px" height="48px" />
  <div className="wd-content-right">
    <div>
      <div className="wd-post-author">{post.userName} <span className="wd-handle">@{post.handle} · {post.time}</span></div>
      <p className="wd-content-paragraph">{post.content}</p>
    </div>
    {post.poster && 
      <img src={`/images/${post.poster}`} alt="" width="480px" height="264px"></img>
    }

    {post.outerLinkItem &&
      <div className="wd-content-post">
        <img src={`/images/${post.outerLinkItem.poster}`} alt="" width="480px" height="264px" />
        <div className="wd-content-post-bottom">
          <p className="wd-content-post-title">{post.outerLinkItem.title}</p>
          <p className="wd-content-post-content">{post.outerLinkItem.description}</p>
        </div>
        </div>
    }
    <ul className="wd-btns">
      <li><i className="far fa-comment"></i> <span>22</span></li>
      <li><i className="fas fa-retweet"></i> <span>9</span></li>
      <li><i className="far fa-heart"></i> <span>37</span></li>
      <li><i className="fas fa-share"></i> </li>
    </ul>
  </div>
  </div>
  )
}

export default PostItem;