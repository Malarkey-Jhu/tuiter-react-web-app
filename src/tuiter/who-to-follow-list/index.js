import WhoToFollowListItem from "./who-to-follow-list-item";
// import whoArr from "./who.json"
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector(
    (state) => state.who);

  return (
    <ul className="list-group wd-who-to-follow">
    {
      whoArray.map(who => 
        <li key={who.userName} className="list-group-item"> 
          <WhoToFollowListItem who={who} />
        </li>
      )
    }
    </ul>
  ); 
}

export default WhoToFollowList;