// import postsArr from './posts.json';
import React from 'react';
import PostSummaryItem from './post-summary-item';
import {useSelector} from "react-redux";

function PostSummaryList() {
  const { tuits } = useSelector(state => state.tuitsData)
  return (
    <>
      {tuits.map(post => <PostSummaryItem key={post.time} post={post}/>)}
    </>
  )
}

export default PostSummaryList;