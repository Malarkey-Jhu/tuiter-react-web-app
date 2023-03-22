import NavigationSidebar from "./navigation-sidebar";
import "./index.css"
import {Routes, Route} from "react-router";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer }});


function Tuiter() {

  return(
    <Provider store={store}>
    <div className="row" style={{ marginTop: 40 }}>
     <div className="col-2 col-md-2 col-lg-2 col-xl-2 wd-sidebar">
       <NavigationSidebar />
     </div>
     <div className="col-10 col-md-10 col-lg-10 col-xl-10"
          style={{"position": "relative"}}>
       <Routes>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
         <Route path="profile" element={<ProfileComponent/>}/>
         <Route path="edit-profile" element={<ProfileComponent isEdit/>}/>
       </Routes>
     </div>
     </div>
     </Provider>
  );
}
export default Tuiter;
