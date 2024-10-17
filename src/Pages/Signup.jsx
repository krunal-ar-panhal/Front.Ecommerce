import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import imageTobase64 from "../Helper/imagebase64";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    profilePic: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  
  const handleuploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);
    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
    console.log("image pic", imagePic);
  };
 

  console.log("log in data", data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login" className="h-screen flex mt-20">
      <div className="mx-auto container p-4">
        <div className=" py-5 w-full h-auto  bg-stone-100 max-w-md mx-auto border rounded-xl shadow-2xl p-7">
          <div className="w-20 h-20 mx-auto cursor-pointer relative">
            <img src={data.profilePic || "/signin.gif"} alt="login_logo" className="w-full h-full" />

            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleuploadPic}
            />
          </div>

          <form className="py-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label>Name :</label>
              <div className="p-2 border rounded-lg bg-white">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  required
                  placeholder="Enter Your Name"
                  className="w-full h-full outline-none bg-white"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label>Email :</label>
              <div className="p-2 border rounded-lg bg-white">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  required
                  placeholder="Example@gmail.com"
                  className="w-full h-full outline-none bg-white"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className="p-2 flex border rounded-lg items-center bg-white">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  required
                  placeholder="Enter Password"
                  className="w-full h-full outline-none"
                  onChange={handleChange}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>
                    {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label>Confirm Password :</label>
              <div className="p-2 flex border rounded-lg items-center bg-white">
                <input
                  type={showconfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  required
                  placeholder="Enter Confirm Password"
                  className="w-full h-full outline-none"
                  onChange={handleChange}
                />
                <div
                  className="cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showconfirmPassword ? (
                      <IoEyeOutline />
                    ) : (
                      <IoEyeOffOutline />
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-black text-white w-full text-center p-2 rounded-md mt-2 active:opacity-80 hover:opacity-90">
                Sign-Up
              </button>
            </div>
          </form>
          <p>
            Have an account ?{" "}
            <Link
              to="/login"
              className="hover:underline hover:font-semibold text-blue-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
