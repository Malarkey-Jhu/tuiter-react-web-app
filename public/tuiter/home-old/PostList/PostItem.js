function PostItem(post) {
  return `
  <div class="wd-content">
  <img class="wd-avatar" src="/images/${post.avatar}" alt="" width="48px" height="48px">
  <div class="wd-content-right">
    <div>
      <div class="wd-post-author">${post.userName} <span class="wd-handle">@${post.handle} · ${post.time}</span></div>
      <p class="wd-content-paragraph">${post.content}</p>
    </div>

    ${(!post.poster)
      ? ''
      :  `<img src="/images/${post.poster}" alt="" width="480px" height="264px"></img>`
    }

    ${(!post.outerLinkItem)
      ? ''
      : `<div class="wd-content-post">
        <img src="/images/${post.outerLinkItem.poster}" alt="" width="480px" height="264px">
        <div class="wd-content-post-bottom">
          <p class="wd-content-post-title">${post.outerLinkItem.title}</p>
          <p class="wd-content-post-content">${post.outerLinkItem.description}</p>
        </div>
        </div>`
    }
    

    <ul class="wd-btns">
      <li><i class="far fa-comment"></i> <span>22</span></li>
      <li><i class="fas fa-retweet"></i> <span>9</span></li>
      <li><i class="far fa-heart"></i> <span>37</span></li>
      <li><i class="fas fa-share"></i> </li>
    </ul>
  </div>
  </div>
  `
}

export default PostItem;