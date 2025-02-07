import React, { useEffect } from "react";
import about from "../assets/about.jpg";
import { FaSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="bg-[#FBF7F5]">
      <div className="w-11/12 mx-auto p-9">
        <div className="flex flex-col lg:flex-row gap-10 ">
          <img className="" src={about} alt="" data-aos="fade-left" />
          <div className="space-y-4 ">
            <button className="btn btn-success">About Us</button>
            <h1 className="text-3xl font-oswald">
              We help individuals to <br />
              become their best versions
            </h1>
            <p className="text-lg font-robo text-gray-400 md:w-3/4">
              I am glad that you have made it here to send a distress signal,
              and inform the Senate that all on board were killed. Dantooine.
              I’m not going to Alderaan. I really got to go. But that to me.
            </p>
            <div
              className="flex flex-col md:flex-row gap-4 justify-between lg:w-3/4"
              data-aos="fade-left"
            >
              <div className="flex justify-center items-center gap-2">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex justify-center items-center text-black">
                  <FaCheck></FaCheck>
                </div>
                <p className="font-semibold text-center">
                  Time to time <br />
                  schedule
                </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="bg-green-900 w-12 h-12 rounded-lg flex justify-center items-center text-white">
                  <FaCheck></FaCheck>
                </div>
                <p className="font-semibold text-center">
                  24/7 online <br />
                  support
                </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="bg-white w-12 h-12 rounded-lg flex justify-center items-center text-black ">
                  <FaCheck></FaCheck>
                </div>
                <p className="font-semibold text-center">
                  Man to <br />
                  optimize
                </p>
              </div>
            </div>

            <div className="flex gap-10 flex-col md:flex-row bg-red-300 lg:w-3/4 items-center justify-center py-5 ">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold">10K</h1>
                <p className="font-oswald">Active students worldwide</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold">100%</h1>
                <p className="font-oswald">Succes Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
