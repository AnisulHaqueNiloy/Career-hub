import React, { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { forgetPass, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailref = useRef();

  console.log(location.state);
  const forget = (e) => {
    const em = e.target.email.value;
    console.log(em);
    e.preventDefault();
    forgetPass(em).then(() => {
      window.location.href =
        "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
      navigate("/auth/login");
    });
  };
  return (
    <div>
      {loading ? (
        ""
      ) : (
        <div className="flex justify-center items-center">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={forget} className="card-body">
              <h1 className="text-xl font-bold">Forgot Password</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailref}
                  name="email"
                  type="email"
                  placeholder="email"
                  value={location?.state?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
