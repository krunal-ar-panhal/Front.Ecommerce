import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data , setData] = useState({
    email : "",
    password : "",
  })

  const handleChange = (e) => {
        const {name , value } = e.target

        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
  }

  console.log("log in data",data);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  

  return (
    <section id="login" className="h-screen flex mt-20">
      <div className="mx-auto container p-4">
        <div className=" py-5 w-full h-auto  bg-stone-100 max-w-md mx-auto border rounded-xl shadow-2xl p-7">
          <div className="w-20 h-20 mx-auto cursor-pointer">
            <img src="/signin.gif" alt="login_logo" />
          </div>
          <form className="py-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label>Email :</label>
              <div className="p-2 border rounded-lg bg-white">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Example@gmail.com"
                  required
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
                  placeholder="Enter Password"
                  required
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
            <Link
              to="/forgetpass"
              className="my-2 hover:font-semibold ml-auto hover:underline hover:text-blue-700 text-right block"
            >
              Forgot Password ?
            </Link>

            <div>
              <button className="bg-black text-white w-full text-center p-2 rounded-md mt-2 active:opacity-80 hover:opacity-90">
                Log-In
              </button>
            </div>
          </form>
          <p>
            Don't have an account ?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:font-semibold text-blue-700"
            >
              Sign-up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
