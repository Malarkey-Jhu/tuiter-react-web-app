function PostSummaryItem({ post }) {
  return (
  <div className="wd-post wd-with-img">
    <div>
      {
        post.topic && <div className="wd-subtitle">{post.topic}</div>
      }
      <div className="wd-author">{post.userName} <i className="fas fa-check-circle fa-sm"></i><span className="wd-time">
          -
          {post.time}</span>
      </div>
      <div className="wd-title">{post.title}</div>
      {
        post.tweets &&
        <div className="wd-tweets">{post.tweets} Tweets</div>
      }
    </div>
    <img src={`/images/${post.image}`} alt="" width="100px" height="100px" />
  </div>
  )
}


export default PostSummaryItem;