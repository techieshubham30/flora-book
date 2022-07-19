import { NavLink, useNavigate } from "react-router-dom";
import { logoutHandler } from "../features/authentication/authSlice";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <aside className="sm:flex flex-col items-center xl:items-end  xl:w-[300px] py-4 fixed h-full border-indigo-600">
      <ul className="space-y-6 mt-4 mb-2.5 xl:ml-24 h-[80%] relative">
        <li>
          <i className="fas fa-seedling fa-2x h-6 w-6 mr-2 logo-icon text-[#d9d9d9]"></i>
        </li>
        <li className=" flex items-center justify-center xl:justify-start  ">
          <NavLink
            to="/"
            className="space-x-2 hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:rounded-full w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out "
          >
            <i className=" text-[#d9d9d9] fas fa-home h-7 text-xl "></i>
            <span className=" text-[#d9d9d9] hidden xl:inline text-xl">
              {" "}
              Home
            </span>
          </NavLink>
        </li>
        <li className=" flex items-center justify-center xl:justify-start  space-x-3">
          <NavLink
            to="/explore"
            className="space-x-2  hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:rounded-full w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out"
          >
            <i className="text-[#d9d9d9] fas fa-hashtag h-7 text-xl "></i>
            <span className="text-[#d9d9d9] hidden xl:inline text-xl">
              {" "}
              Explore
            </span>
          </NavLink>
        </li>
        <li className=" flex items-center justify-center xl:justify-start  space-x-3">
          <NavLink
            to="/bookmarks"
            className="space-x-2  hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:rounded-full w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out"
          >
            <i className="text-[#d9d9d9] fas fa-bookmark h-7 text-xl "></i>
            <span className="text-[#d9d9d9] hidden xl:inline text-xl">
              {" "}
              BookMarks
            </span>
          </NavLink>
        </li>
        <li className="flex items-center justify-center xl:justify-start ">
          <button className="hidden xl:inline  bg-[#1d9bf0]  w-full rounded-full py-2 px-3 bottom-20 right-4 text-white font-bold">
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
          <NavLink to="/xt">
            <div className=" flex items-center justify-center xl:ml-auto xl:-mr-5 mt-auto  hover:bg-[#d9d9d9] hover:bg-opacity-10 hover:rounded-full w-[52px] h-[52px] xl:w-auto xl:h-auto xl:py-3 xl:px-4 transition duration-200 ease-out">
              <img
                src={user.avatarURL}
                className="h-10 w-10 rounded-full xl:mr-2.5"
              />
              <div className="hidden xl:inline leading-5">
                <h4 className="font-bold text-white">shubham870</h4>
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
