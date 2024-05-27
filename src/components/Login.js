import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/2dcb03b9-b710-4bb4-a7f7-799c2dfb3205/US-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
        ></img>
      </div>

      <form className="z-20 text-black-rbga bg-black absolute w-3/12 mx-auto left-0 right-0 my-48 p-10 rounded-[4px]  bg-opacity-80">
        <h1 className="m-2 text-white text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800 my-4 py-3 text-white rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 m-2 w-full bg-gray-800 my-4 py-3 text-white rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800 py-3 text-white rounded-sm"
        />
        <button className="p-2 m-2 my-4 bg-red-600 w-full text-white font-bold text-l hover:bg-red-800 rounded-sm">
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <p className="text-white p-2 cursor-pointer" onClick={toggleSignInForm}>
          Are you new to Netflix? Sign up Now
        </p>
      </form>
    </div>
  );
};
export default Login;
