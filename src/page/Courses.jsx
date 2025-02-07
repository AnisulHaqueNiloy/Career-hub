import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaArrowLeft, FaStar } from "react-icons/fa6";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CourseCard from "../Components/CourseCard";

const Courses = () => {
  const d = useLoaderData();

  return (
    <div>
      <div className="fixed w-full z-50 ">
        <div className="w-11/12 mx-auto ">
          <Header></Header>
        </div>
      </div>
      <div className="w-11/12 mx-auto pt-10">
        <Helmet>
          <title>Courses</title>
        </Helmet>
      </div>

      <div className="py-14 grid md:grid-cols-3 w-11/12 mx-auto">
        {d.map((item, id) => (
          <CourseCard key={id} item={item}></CourseCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
