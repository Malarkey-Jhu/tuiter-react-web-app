import React from 'react';
import TuitsItem from './TuitItem';
import {useSelector} from "react-redux";

function TuitsList() {
  const tuitsArray = useSelector(state => state.tuits)
  return (
    <>
      {tuitsArray.map(post => <TuitsItem key={post._id} post={post}/>)}
    </>
  )
}

export default TuitsList;