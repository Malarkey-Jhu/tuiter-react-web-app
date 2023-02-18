import PostSummaryList from "../post-summary-list";

const Center = () => {
    return(
      <>
            <div className="wd-top">
            <div className="wd-top-search">
              <input type="text" placeholder="Search Tuiter" />
              <i className="fas fa-search"></i>
              <span><i className="fa fa-cog"></i></span>
            </div>

            <ul className="nav">
              <li className="nav-item">
                <span className="nav-link active">For you</span>
                <div className="active-bar"></div>
              </li>
              <li className="nav-item">
                <span className="nav-link" >Trending</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" >News</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" >Sports</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" >Entertainment</span>
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