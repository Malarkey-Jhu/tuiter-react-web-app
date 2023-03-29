import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
   return (`
           <ul class="list-group wd-who-to-follow">
           ${who.map(who => '<li class="list-group-item">' + WhoToFollowListItem(who)).join('') + '</li>'}
           </ul>
`); }

export default WhoToFollowList;