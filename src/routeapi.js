import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpages from "./loginpages";
// import Navbar from './navbars'
// import Homepages from './homepages'
// import Navbar from './navbar'
//import {stateContext}  from './stateContext';
//import { initialState, stateReducer } from './stateReducer'
import { useSelector, Provider } from "react-redux";
import { store } from "./store";
import Homepages from "./homepages";
import Detailspage from './detailspage'
// import Navbars from './navbars'

const Routeapi = () => {
  // const [state,dispatch]= useReducer(stateReducer, initialState)
  const state = useSelector(({ sample }) => sample);
  console.log(state);
  return (
  //   <BrowserRouter>
  //     {state?.isLoggedIn ?
  //     <>
  //     <Navbar/>
  //       <Routes>
  //           <Route path="/homepages" element={<Homepages />}></Route>
  //           {/* <Route path="/productdetails" element={<Productdetails />}></Route>
  //           <Route path="/favorites" element={<Favorites />}></Route>
  //           <Route path="/add" element={<Add />}></Route>
  //           <Route path="/details" element={<Details/>}></Route> */}
            
  //       </Routes></>:<Routes>
  //       <Route path="/" element={<Loginpages />}></Route>
  //        <Route path="*" element={<Loginpages />}></Route>
  //       </Routes>
  //       }
  //   </BrowserRouter>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpages/>}></Route>
      <Route path='/homepages' element={<Homepages/>}></Route>
      {/* <Route path='/navbars' element={<Navbars/>}></Route> */}
      <Route path="/detailspage/:id" element={<Detailspage/>}></Route>
    </Routes>
  </BrowserRouter>

  );
};
const ProviderSetup = () => {
  return (
    <Provider store={store}>
      <Routeapi />
    </Provider>
  );
};

export default ProviderSetup;
