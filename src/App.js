import React from 'react';

// import ForgotPwd from "./view/ForgotPwd/ForgotPwd";
import Login from "./view/Login/Login";
// import PackageCard from "./view/Card/PackageCard";
import Register from "./view/Register/Register";
// import Profile from './view/Profile/Profile';
// import ProfileMain from './view/Profile/ProfileMain';
import Dashboard from './view/Dashboard/Dashboard';

const App=() => {
  return (
    <div>
      <Login/> 
      <Register/>
      {/* <ForgotPwd/> */}
      <Dashboard userName='Craig'/>
      {/* <PackageCard/> */}
      {/* <ProfileMain/> */}

    </div>
  )
}

export default App;
