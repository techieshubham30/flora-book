import { NavLink, useNavigate } from "react-router-dom";
import { logoutHandler } from "../features/authentication/authSlice";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <aside className="sm:flex flex-col items-center xl:items-end  xl:w-[300px] py-4 fixed h-full border-indigo-600">
      <ul className="space-y-6 mt-4 mb-2.5 xl:ml-24 h-[80%] relative">
        <li>
          <i className="fas fa-seedling fa-2x h-6 w-6 mr-2 logo-icon text-yellowColor"></i>
        </li>
        <li className=" flex items-center justify-center xl:justify-start  ">
          <NavLink
            to="/"
            className="space-x-2 hover:bg-lightGreen hover:rounded-full p-2 "
          >
            <i className="fas fa-home h-7 text-xl "></i>
            <span className="hidden xl:inline text-xl"> Home</span>
          </NavLink>
        </li>
        <li className=" flex items-center justify-center xl:justify-start  space-x-3">
          <NavLink
            to="/"
            className="space-x-2 hover:bg-lightGreen hover:rounded-full p-2"
          >
            <i className="fas fa-hashtag h-7 text-xl "></i>
            <span className="hidden xl:inline text-xl"> Explore</span>
          </NavLink>
        </li>
        <li className=" flex items-center justify-center xl:justify-start  space-x-3">
          <NavLink
            to="/"
            className="space-x-2 hover:bg-lightGreen hover:rounded-full p-2"
          >
            <i className="fas fa-bookmark h-7 text-xl "></i>
            <span className="hidden xl:inline text-xl"> BookMarks</span>
          </NavLink>
        </li>
        <li className="flex items-center justify-center xl:justify-start ">
          <button className="hidden xl:inline  bg-primary  w-full rounded-full py-2 px-3 bottom-20 right-4 text-white font-bold">
            New Post
          </button>
        </li>

        <li className="flex items-center justify-center xl:justify-start ">
          <button
            onClick={() => {
              dispatch(logoutHandler());
              navigate("/login", { replace: true });
            }}
            className="hidden xl:inline  bg-primary  w-full rounded-full py-2 px-3 bottom-20 right-4 text-white font-bold"
          >
            Log Out
          </button>
        </li>

        <li className="absolute bottom-0">
          <NavLink to="/">
            <div className=" flex items-center justify-center xl:ml-auto xl:-mr-5 mt-auto hover:bg-lightGreen hover:rounded-full p-3">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                className="h-10 w-10 rounded-full xl:mr-2.5"
              />
              <div className="hidden xl:inline leading-5">
                <h4 className="font-bold ">shubham870</h4>
                <p className="text-[#6e767d]">@shubham870</p>
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export { SideBar };
