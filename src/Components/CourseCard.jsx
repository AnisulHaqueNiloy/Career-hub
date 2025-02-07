import React, { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import Swal from "sweetalert2";

const CourseCard = ({ item }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const htoast = () => {
    Swal.fire({
      title: "Succesfully enrolled",
      text: `${item.service_name}`,
      icon: "success",
      confirmButtonText: "OK",
    });
    setIsEnrolled(true);
    console.log("click");
  };

  return (
    <div className="p-4 w-11/12 mx-auto">
      {/* Card */}
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={item?.image}
            alt={item.service_name}
            className="w-full h-[350px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{item.service_name}</h2>
          <p className="text-sm text-gray-500">Category: {item.category}</p>
          <p className="text-lg font-semibold">Price: {item.pricing}</p>
          <p className="text-sm text-gray-500">Counselor: {item.counselor}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => htoast()}
              className={`btn flex items-center ${
                isEnrolled ? "btn-disabled" : "btn-primary"
              }`}
            >
              Enroll <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
