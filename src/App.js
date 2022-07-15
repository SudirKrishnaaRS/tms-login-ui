import React from 'react';

import ForgotPwd from "./view/ForgotPwd/ForgotPwd";
import Login from "./view/Login/Login";
// import PackageCard from "./view/Card/PackageCard";
import Register from "./view/Register/Register";
// import Profile from './view/Profile/Profile';
// import ProfileMain from './view/Profile/ProfileMain';
import Dashboard from './view/Dashboard/Dashboard';



import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet} from 'react-router-dom';
import PackageCard from './view/Card/PackageCard';
import ViewHotelBookingsMain from './view/Booking/ViewHotelBookingsMain';
import ViewBookingsMain from './view/Booking/ViewBookingsMain';
import Profile from './view/Profile/Profile';
import ProfileMain from './view/Profile/ProfileMain';
import AdminDashboard from './view/Dashboard/AdminDashboard';
import ViewUsers from './view/Admin/ViewUsers';
import ViewAgencies from './view/Admin/ViewAgencies';

const App=() => {
  return (
    // <div>
    //   {/* <Login/> 
    //   <Register/> */}
    //   {/* <ForgotPwd/> */}
    //   {/* <Dashboard userName='Craig'/> */}
    //   {/* <PackageCard/> */}
    //   {/* <ProfileMain/> */}
    // </div>

    <Router>
      <Routes>

         {/* USER DASHBOARD ROUTES */}
        {/* <Route path='/' element={<Dashboard userName='Craig'/>}> 
            <Route path='/profile' element={<ProfileMain/>} />
            <Route path='/bookpackage' element={<PackageCard/>} />
            <Route path='/bookhotel' element={<ViewHotelBookingsMain/>} />
            <Route path='/viewbooking' element={<ViewBookingsMain/>} /> 
            <Route path='/logout' element={<Login/>} /> 
        </Route> */}


        {/* ADMIN DASHBOARD ROUTES */}
        <Route path='/' element={<AdminDashboard userName='admin'/>}>
            <Route path='/bookpackage' element={<PackageCard/>} />
            <Route path='/bookhotel' element={<ViewHotelBookingsMain/>} />
            <Route path='/viewbooking' element={<ViewBookingsMain/>} />
            <Route path='/viewusers' element={<ViewUsers/>} />
            <Route path='/viewagencies' element={<ViewAgencies/>} /> 
        </Route>

       
        {/* Common Routes for Login,Register,Forgot Passoword */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotpassword' element={<ForgotPwd/>} />


        
      </Routes>
    </Router>

  )
}

export default App;
