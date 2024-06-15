import { useRef, useState } from "react";
import Header from "./Header";
import { validateFormInputs } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundImg } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const onButtonClicked = () => {
    const message = validateFormInputs(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message === null && !isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => {
          const displayName = name.current.value;
          const { uid, email } = res.user;
          email.current.value = "";
          password.current.value = "";

          updateProfile(res.user, {
            displayName: displayName,
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((err) => {
              console.log("Profile name is not updated");
            });
        })
        .catch((err) => {
          console.log("Error message is", err);
          setErrorMessage(err.message);
        });
    } else if (message === null && isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => console.log(res.user))
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.message);
        });
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
        <img src={backgroundImg} alt="background-image"></img>
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
