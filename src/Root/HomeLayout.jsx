import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet";
import About from "../Components/About";
import Solution from "../Components/Solution";
import Team from "../Components/Team";

const HomeLayout = () => {
  const { name } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Career Hub</title>
      </Helmet>
      <header className="w-11/12 mx-auto ">
        <div className="fixed w-11/12 z-50">
          <Header></Header>
        </div>
        <div className="bg-banner bg-no-repeat bg-cover h-[400px] lg:h-[600px] flex justify-center pt-20">
          <div className="pt-10 flex flex-col  items-center">
            <h1 className=" text-3xl lg:text-7xl font-oswald text-white uppercase">
              {" "}
              Your Future Your Choice
            </h1>
            <p className="font-robo text-2xl lg:text-5xl text-white">
              Personalized Career Guidance
            </p>
          </div>
        </div>
      </header>

      <div className="w-11/12 mx-auto">
        <Team></Team>
        <About></About>
      </div>
      <main className="w-11/12 mx-auto">
        <div className="min-h-[calc(100vh-288px)] ">
          <Outlet></Outlet>
        </div>
      </main>

      <Solution></Solution>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
