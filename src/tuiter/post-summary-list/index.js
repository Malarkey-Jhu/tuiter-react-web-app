import postsArr from './posts.json';
import PostSummaryItem from './post-summary-item';

function PostSummaryList() {
  return (
    <>
      {postsArr.map(post => <PostSummaryItem key={post.time} post={post}/>)}
    </>
  )
}

export default PostSummaryList;