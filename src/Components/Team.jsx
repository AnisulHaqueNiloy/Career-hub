import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14  " data-aos="fade-up">
      <div className="flex justify-center items-center mb-8">
        <h1 className="font-oswald text-5xl ">
          Meet The{" "}
          <span className="font-extrabold font-oswald text-5xl">Team</span>
        </h1>
      </div>

      <div className="w-11/12 mx-auto">
        <Slider {...settings}>
          {data.map((item, id) => (
            <div key={id} className="border border-purple-300 rounded-2xl ">
              <img
                className="w-full h-[400px] relative rounded-tr-2xl rounded-tl-2xl"
                src={item.image}
                alt=""
              />
              <div className="bg-gray-300 rounded-br-2xl rounded-bl-2xl p-2">
                <p className="text-2xl font-oswald font-bold">
                  {item.counselor}
                </p>
                <p className="font-robo">{item.service_name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
