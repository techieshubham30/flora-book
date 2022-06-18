import MockmanEs from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import { Home } from "../pages/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/mock" element={<MockmanEs />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export { MyRoutes };
