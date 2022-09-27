import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Project from "./project";
import Create from "./Create";
export default function Index() {
  const [user, setUser] = useState();
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/dangnhap">dangnhap</Link>
        </div>
        <Routes>
          <Route path="/dangnhap" element={<Login Login={setUser} />} />
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
