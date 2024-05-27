import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  const onSignOutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div>
          <button
            className="text-white text-xl m-2 p-2 cursor-pointer hover:text-red-600"
            onClick={onSignOutClick}
          >
            {user?.displayName + "- "} Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
