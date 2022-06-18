import { SideBar } from "../components/Sidebar";
import { Feed } from "../components/Feed";

const Home = () => {
  return (
    <div className="min-h-screen flex max-w-[1600px] mx-auto ">
      <SideBar />
      <Feed/>
     
    </div>
  );
};

export { Home };
