import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { loginHandler } from "../features/authentication/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const loginFormHandler = async (userInfo) => {
    const res = await dispatch(loginHandler(userInfo));
    if (res?.payload?.encodedToken) {
      localStorage.setItem("authToken", res.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(res.payload.foundUser));

      setUserDetails({
        username: "",
        password: "",
      });
      navigate(from, { replace: true });
    }
  };
  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-lightGreen">
        <div className="bg-lightGreen flex flex-col justify-center ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginFormHandler(userDetails);
            }}
            className="max-w-[400px] w-full mx-auto  bg-white p-8 px-8 rounded-lg border-t-4 "
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              SIGN IN
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>User Name</label>
              <input
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
                value={userDetails.username}
                type="text"
                className="rounded-lg bg-lightGreen mt-2 p-2 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Passwor</label>
              <input
                required
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                value={userDetails.password}
                type="password"
                className="rounded-lg bg-lightGreen mt-2 p-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                loginFormHandler({
                  username: "shubham",
                  password: "shubham870@",
                });
              }}
              className="w-full my-3 bg-primary shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg px-[0.5] py-[0.8rem]"
            >
              Log in as a Guest
            </button>
            <button className="w-full my-3 bg-gray-400 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg px-[0.5] py-[0.8rem]">
              Log In
            </button>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center gap-1">Don't have an account?</p>
              <NavLink to="/signup">
                <p className="cursor-pointer">Sign UP </p>
              </NavLink>
            </div>
          </form>
        </div>

        {/* <div className="hidden sm:block">
          <img
            src="./assets/loginImg.svg"
            className="w-full h-full object-cover "
          />
        </div> */}
      </div>
    </div>
  );
};

export { Login };
