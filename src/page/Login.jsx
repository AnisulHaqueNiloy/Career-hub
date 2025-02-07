import React, { useContext, useRef, useState } from "react";
import { FaGoogle, FaGooglePlus } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const [showPass, setshow] = useState(false);
  const [ferror, setError] = useState("");
  const emailref = useRef();
  const location = useLocation();
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    loginUser(email, password)
      .then((currentuser) => {
        const user = currentuser.user;
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome back, ${user.email}!`,
          icon: "success",
          confirmButtonText: "OK",
        });
        console.log(user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        Swal.fire({
          title: "Opps",
          text: ` ${ferror}!`,
          icon: "warning",
          confirmButtonText: "OK",
        });
      });
  };
  const loginGoogle = () => {
    loginWithGoogle().then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        title: "Login Successful!",
        text: `Welcome back, ${user.email}!`,
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate(location?.state ? location.state : "/");
    });
  };

  const forget = () => {
    const email = emailref.current.value;
    navigate("/auth/forgetPassword", { state: { email } });
  };

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={login} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailref}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setshow(!showPass)}
              className="bg-transparent btn btn-xs absolute right-4 bottom-3"
            >
              {" "}
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <h1 className="text-center">Or</h1>
          <div
            onClick={() => loginGoogle()}
            className="flex justify-start gap-3 items-center border shadow-sm p-2 rounded-lg cursor-pointer"
          >
            <FaGooglePlus className="text-blue-500"></FaGooglePlus>

            <h1>Login with gmail</h1>
          </div>
          <div className="flex justify-between">
            <label className="label">
              <a
                onClick={forget}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Dont have an account?{" "}
                <Link className="text-blue-500" to="/auth/register">
                  Register
                </Link>
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
