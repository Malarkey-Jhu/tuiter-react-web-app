import NavigationSidebar from "./navigation-sidebar";
import "./index.css"
import {Routes, Route} from "react-router";
import ExploreComponent from "./explore";
import HomeComponent from "./home";

function Tuiter() {

  return(
    <>
    <div className="row" style={{ marginTop: 40 }}>
     <div className="col-2 col-md-2 col-lg-2 col-xl-2 wd-sidebar">
       <NavigationSidebar />
     </div>
     <div className="col-10 col-md-10 col-lg-10 col-xl-10"
          style={{"position": "relative"}}>
       <Routes>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
       </Routes>
     </div>
     </div>
     </>
  );
}
export default Tuiter;
