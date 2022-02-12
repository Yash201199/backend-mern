import React from 'react';
import {NavLink} from "react-router-dom"
// import { Navbar } from './Navbar';
const Main_page = () => {
  return (
      <>
      <div className='main_form'>
       <NavLink to="/login"> Login </NavLink>
       <NavLink to="/register"> Register </NavLink>
       {/* <Navbar/> */}
      </div>
      </>
  );
};

export default Main_page;
