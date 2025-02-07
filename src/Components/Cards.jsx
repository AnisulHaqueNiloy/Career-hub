/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Cards = ({ d }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="card  bg-base-100 shadow-xl" data-aos="fade-up">
      <figure>
        <img
          src={d?.image}
          alt={d.service_name}
          className="w-full h-[350px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{d.service_name}</h2>
        <p className="text-sm text-gray-500">Category: {d.category}</p>
        <p className="text-lg font-semibold">Price: {d.pricing}</p>
        <p className="text-sm text-gray-500">Counselor: {d.counselor}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/details/${d.id}`}
            className="btn btn-primary flex items-center"
          >
            {d.button} <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
