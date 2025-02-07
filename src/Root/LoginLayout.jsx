import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";

const LoginLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Authentication</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <div className="min-h-[calc(100vh-288px)] py-24">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
