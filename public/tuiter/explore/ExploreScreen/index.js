import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           
            <div class="wd-top">

            <div class="wd-top-search">
              <input type="text" placeholder="Search Tuiter">
              <i class="fas fa-search"></i>
              <a href="explore-settings.html"><i class="fa fa-cog"></i></a>
            </div>

            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
                <div class="active-bar"></div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Entertainment</a>
              </li>
            </ul>

          </div>

           <div class="wd-center">
           <img src="./images/starship.webp" class="w-100" alt="">
           <h3>SpaceX's Starship</h3>
           </div>

           <div class="wd-bottom">
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
