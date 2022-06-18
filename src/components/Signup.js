import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signupHandler } from "../features/authentication/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const signupFormHandler = async (userInfo) => {
    const res = await dispatch(signupHandler(userInfo));
    if (res?.payload?.encodedToken) {
      localStorage.setItem("authToken", res.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(res.payload.createdUser));
    }
    setUserDetails({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    });

    navigate(from, { replace: true });
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-lightGreen">
        <div className="bg-lightGreen flex flex-col justify-center ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signupFormHandler(userDetails);
            }}
            className="max-w-[400px] w-full mx-auto  bg-white p-8 px-8 rounded-lg border-t-4 "
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              SIGN UP
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>First Name</label>
              <input
                required
                value={userDetails.firstName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, firstName: e.target.value })
                }
                type="text"
                className="rounded-lg bg-lightGreen mt-2 p-2 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Last Name</label>
              <input
                required
                value={userDetails.lastName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, lastName: e.target.value })
                }
                type="text"
                className="rounded-lg bg-lightGreen mt-2 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>User Name</label>
              <input
                required
                value={userDetails.username}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
                type="text"
                className="rounded-lg bg-lightGreen mt-2 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Password</label>
              <input
                required
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                type="password"
                className="rounded-lg bg-lightGreen mt-2 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full my-4 bg-primary shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg px-[0.5] py-[0.8rem]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Signup };
