import React, { useEffect } from 'react';
import TuitsItem from './TuitItem';
import { useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

function TuitsList() {
  const { tuits, loading } = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
  
  return (
    <ul className='list-group'>
    {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }
     {tuits.map(post => <TuitsItem key={post._id} post={post}/>)}
    </ul>
  )
}

export default TuitsList;