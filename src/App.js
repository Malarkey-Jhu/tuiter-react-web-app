import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import Labs from './labs'
import './App.css';

const MyComp = () => false;

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
    <Routes>
          <Route index
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter/*"
                 element={<Tuiter/>}/>
        </Routes>
    </div>
    <MyComp />
    </BrowserRouter>
  );
}

export default App;
