import WhoToFollowListItem from "./who-to-follow-list-item";
import whoArr from "./who.json"
const WhoToFollowList = () => {
  return (
    <ul className="list-group wd-who-to-follow">
    {
      whoArr.map(who => 
        <li key={who.userName} className="list-group-item"> 
          <WhoToFollowListItem who={who} />
        </li>
      )
    }
    </ul>
  ); 
}

export default WhoToFollowList;