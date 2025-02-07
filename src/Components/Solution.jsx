import React from "react";
import {
  FcAutomatic,
  FcConferenceCall,
  FcTodoList,
  FcViewDetails,
} from "react-icons/fc";

const Solution = () => {
  return (
    <div className="bg-banner1 ">
      <div className="w-11/12 mx-auto py-14">
        <button className="font-bold font-oswald bg-yellow-100 px-5 py-2 mb-3">
          Process
        </button>

        <h1 className="text-white font-bold text-3xl font-oswald mb-3">
          Our Solution Process
        </h1>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="bg-black border border-white flex flex-col gap-3 justify-center items-center p-4 hover:border-purple-300 hover:scale-105">
            <p className="text-4xl">
              <FcViewDetails></FcViewDetails>
            </p>
            <p className="px-3 py-1 uppercase text-white font-oswald font-bold rounded-2xl border border-white">
              Step 01
            </p>
            <h2 className="font-semibold font-oswald text-2xl text-white">
              Plan For Work
            </h2>
            <p className="text-xl font-oswald text-white/30 text-center">
              Through plans, you break down a process into small and identify
              the things you accomplish..
            </p>
          </div>

          <div className="bg-black border border-white flex flex-col gap-3 justify-center items-center p-4 hover:border-purple-300 hover:scale-105">
            <p className="text-4xl">
              <FcAutomatic></FcAutomatic>
            </p>
            <p className="px-3 py-1 uppercase text-white font-oswald font-bold rounded-2xl border border-white">
              Step 02
            </p>
            <h2 className="font-semibold font-oswald text-2xl text-white">
              Implementation
            </h2>
            <p className="text-xl font-oswald text-white/30 text-center">
              Through plans, you break down a process into small and identify
              the things you accomplish..
            </p>
          </div>

          <div className="bg-black border border-white flex flex-col gap-3 justify-center items-center p-4 hover:border-purple-300 hover:scale-105">
            <p className="text-4xl">
              <FcConferenceCall></FcConferenceCall>
            </p>
            <p className="px-3 py-1 uppercase text-white font-oswald font-bold rounded-2xl border border-white">
              Step 03
            </p>
            <h2 className="font-semibold font-oswald text-2xl text-white">
              Consultancy
            </h2>
            <p className="text-xl font-oswald text-white/30 text-center">
              Through plans, you break down a process into small and identify
              the things you accomplish..
            </p>
          </div>

          <div className="bg-black border border-white flex flex-col gap-3 justify-center items-center p-4 hover:border-purple-300 hover:scale-105">
            <p className="text-4xl">
              <FcTodoList></FcTodoList>
            </p>
            <p className="px-3 py-1 uppercase text-white font-oswald font-bold rounded-2xl border border-white">
              Step 04
            </p>
            <h2 className="font-semibold font-oswald text-2xl text-white">
              Project Closure
            </h2>
            <p className="text-xl font-oswald text-white/30 text-center">
              Through plans, you break down a process into small and identify
              the things you accomplish..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
