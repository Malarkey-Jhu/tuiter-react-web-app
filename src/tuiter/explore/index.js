import WhoToFollowList from "../who-to-follow-list";
import Center from './center';

const ExploreComponent = () => {
    return(
       <div>
        <div className="row wd-row">
        <div className="col-10 col-lg-8 col-xl-8">
        <div className="wd-container">
        <Center />
        </div>
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList />
        </div>
        </div>
     </div>
    );
}
export default ExploreComponent;