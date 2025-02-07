import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaArrowLeft, FaArrowRightArrowLeft, FaStar } from "react-icons/fa6";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Details = () => {
  const navigate = useNavigate();
  const d = useLoaderData();
  const { id } = useParams();
  console.log(id, d);

  const [data, setData] = useState("");
  const [feedback, setfeedback] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const filter = [...d].find((item) => item.id == id);
    if (filter) {
      setData(filter);
    }
  }, [d, id]);

  console.log(data);

  const input = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  const submitf = () => {
    const cmnt = [...feedback, inputValue];
    setfeedback(cmnt);
    setInputValue("");
  };
  console.log(feedback);
  return (
    <div>
      <div className="fixed w-full ">
        <div className="w-11/12 mx-auto ">
          <Header></Header>
        </div>
      </div>
      <div className="w-11/12 mx-auto pt-10">
        <Helmet>
          <title>Details</title>
        </Helmet>

        <div className="container mx-auto pt-20 md:pt-10">
          <p onClick={() => navigate("/")}>
            <FaArrowLeft></FaArrowLeft>
          </p>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            {data.service_name}
          </h1>

          {/* Layout Section */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div>
              <img
                src={data.image}
                alt={data.service_name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Details Section */}
            <div>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-800">Category:</span>{" "}
                  {data.category}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {data.description}
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Pricing:</span> {data.pricing}
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Duration:</span>{" "}
                  {data.duration}
                </p>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Counselor:</span>{" "}
                  {data.counselor}
                </p>
              </div>

              {/* Rating Section */}
              <div className="flex items-center mt-4">
                <FaStar className="text-yellow-400" />
                <span className="ml-2 text-lg text-gray-800">
                  {data.rating} / 5
                </span>
              </div>

              {/* Call-to-Action Button */}
            </div>
          </div>
        </div>

        <h1 className="text-xl text-center font-bold mb-4">Feedback Section</h1>

        {/* Input field and button */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            value={inputValue}
            onChange={input}
            placeholder="Write your comment here"
            className="border rounded p-2 w-full max-w-md"
          />
          <button
            onClick={submitf}
            className="bg-blue-500 text-white p-2 rounded mt-2 ml-2"
          >
            Add Comment
          </button>
        </div>

        <div className="space-y-5 mb-5">
          {feedback &&
            feedback.map((data, id) => (
              <>
                <div key={id} className="border rounded-xl border-black p-5 ">
                  <h1 className="text-3xl font-robo">{data}</h1>
                </div>
              </>
            ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
