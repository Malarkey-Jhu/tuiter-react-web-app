function PostSummaryItem(post) {
  return `
  <div class="wd-post wd-with-img">
  <div>
    ${
      (post.topic !== undefined)
      ? `<div class="wd-subtitle">${post.topic}</div>`
      : ''
    }
    <div class="wd-author">${post.userName} <i class="fas fa-check-circle fa-sm"></i><span class="wd-time">
        -
        ${post.time}</span>
    </div>
    <div class="wd-title">${post.title}</div>
    ${
      (post.tweets !== undefined) 
      ? `<div class="wd-tweets">${post.tweets} Tweets</div>` 
      : ''
    }
  </div>
  <img src="./images/${post.image}" alt="" width="100px" height="100px">
</div>
  `
}


export default PostSummaryItem;