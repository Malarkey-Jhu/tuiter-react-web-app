import posts from './posts.js';
import PostSummaryItem from './PostSummaryItem.js';

function PostSummaryList() {
  return `
    ${posts.map(post => PostSummaryItem(post)).join('')}
  `;
}

export default PostSummaryList;