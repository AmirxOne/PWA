import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Users from '../pages/Users'

const Nav = () => {
  return (
    <>
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <ul className="flex">
            <li className=" ml-5"><Link className="py-2.5 px-3 bg-slate-200 rounded-xl" to="/">Home</Link></li>
            <li className=" ml-5"><Link className="py-2.5 px-3 bg-slate-200 rounded-xl" to="/users">Users</Link></li>
            <li className=" ml-5"><Link className="py-2.5 px-3 bg-slate-200 rounded-xl" to="/about">About</Link></li>
           
        </ul>
      </div>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/users" element={<Users/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
    </Routes>
    </>
  );
};

export default Nav;
