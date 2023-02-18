import posts from './posts.json';
import PostItem from './post-item';


function PostList() {
  return (
    <>
    {posts.map(post => <PostItem key={post.id} post={post}/>)}
    </>
  );
}

export default PostList