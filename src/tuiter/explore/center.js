import PostSummaryList from "../post-summary-list";

const Center = () => {
    return(
      <>
            <div className="wd-top">
            <div className="wd-top-search">
              <input type="text" placeholder="Search Tuiter" />
              <i className="fas fa-search"></i>
              <a href="explore-settings.html"><i className="fa fa-cog"></i></a>
            </div>

            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">For you</a>
                <div className="active-bar"></div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Trending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Entertainment</a>
              </li>
            </ul>

          </div>

           <div className="wd-center">
           <img src={`/images/starship.webp`} className="w-100" alt="" />
           <h3>SpaceX's Starship</h3>
           </div>

           <div className="wd-bottom">
           {<PostSummaryList />}
           </div>
           </>
    );
}
export default Center;