import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <div className="min-h-[calc(100vh-288px)] py-24">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Profile;
