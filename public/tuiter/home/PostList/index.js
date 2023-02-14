import posts from './posts.js';
import PostItem from './PostItem.js';


function PostList() {
  return `
    ${posts.map(post => PostItem(post)).join('')}
  `;
}

export default PostList;