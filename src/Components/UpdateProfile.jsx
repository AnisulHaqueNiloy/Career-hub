import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { auth } from "../Firebase/Firbase.config";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { user, updateprofile } = useContext(AuthContext);

  const update = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateprofile({ displayName: name, photoURL: photo }).then(() => {
      console.log("image change");

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Updated",
        showConfirmButton: false,
        timer: 1000,
      });
    });
    // console.log(name, photo);
  };

  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className="flex flex-col gap-3 justify-center items-center">
        <img className="rounded-full w-80 h-80" src={user?.photoURL} alt="" />
        <h1 className="text-3xl font-bold">{user?.displayName}</h1>
        <h2 className="text-2xl font-semibold">{user?.email}</h2>
        <div>
          <h1 className="text-3xl font-bold border-b">
            Change Your Name & Image
          </h1>
          <div>
            <form onSubmit={update} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Name</span>
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
                  <span className="label-text">Profile Image</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
