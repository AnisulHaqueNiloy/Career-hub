import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { createUser, setpasserror, pass, updateprofile, user } =
    useContext(AuthContext);
  console.log(createUser);
  const [showPass, setshow] = useState(false);
  const [err, seterror] = useState("");
  const register = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    seterror("");
    setpasserror("");
    const pass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!pass.test(password)) {
      setpasserror(
        "Password should atleast one uppercase and one lowercase and atleast 6 character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        Swal.fire({
          title: "Account Created",
          text: `Welcome !`,
          icon: "success",
          confirmButtonText: "OK",
        });
        updateprofile({ displayName: name, photoURL: photo }).then(() => {
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((error) => {
        seterror(error.message);
        Swal.fire({
          title: "Ooppps!",
          text: ` ${err}!`,
          icon: "warning",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={register} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          {pass ? <p className="text-warning text-xs">{pass}</p> : ""}
          <div className="flex justify-between">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Already have an account?{" "}
                <Link className="text-blue-500" to="/auth/login">
                  Login
                </Link>
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
