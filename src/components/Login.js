import { useRef, useState } from "react";
import Header from "./Header";
import { validateFormInputs } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const onButtonClicked = () => {
    console.log("Sign in clicked");
    console.log(email.current.value);
    console.log(password.current.value);
    const message = validateFormInputs(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message === null && !isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => {
          console.log("I am here");
          console.log(res.user);
          updateProfile(res.user, {
            displayName: name.current.value,
          })
            .then(console.log("profile updated"))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log("Error message is", err));
      email.current.value = "";
      password.current.value = "";
    } else if (message === null && isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => console.log(res.user))
        .catch((error) => console.log(error));
    } else {
      console.log("Test");
    }
  };

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

      <form
        className="z-20 text-black-rbga bg-black absolute w-3/12 mx-auto left-0 right-0 my-48 p-10 rounded-[4px]  bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="m-2 text-white text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800 py-3 text-white rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 m-2 w-full bg-gray-800 py-3 text-white rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800 py-3 text-white rounded-sm"
        />
        <p className="text-red-600 p-2">{errorMessage}</p>
        <button
          className="p-2 m-2 my-4 bg-red-600 w-full text-white font-bold text-l hover:bg-red-800 rounded-sm"
          onClick={onButtonClicked}
        >
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <p className="text-white p-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "Are you new to Netflix? Sign up Now"
            : "Already a user? Sign in"}
        </p>
      </form>
    </div>
  );
};
export default Login;
