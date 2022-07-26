import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Navigation from './Navigation';

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) =>{
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <div
        style={{
              maxWidth: 890,
              width: "100%",
              margin: "0 auto",
              marginTop: 80,
              display: "flex",
              justifyContent: "center",
            }}
      >
      <Routes>
        {isLoggedIn ? 
        <>
          <Route path="/" element={<Home userObj={userObj}/>}/>
          <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser}/>}/>
        </> : <>
              <Route path="/" element={<Auth />}/>
              <Route path="*" element={<><Navigate replace to="/"/></>}/>
        </>}
      </Routes>
      </div>
    </Router>
  )
};

export default AppRouter;