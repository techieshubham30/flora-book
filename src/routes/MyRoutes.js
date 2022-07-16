import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import { Home } from "../pages/Home";
import { PrivateRoutes } from "./PrivateRoutes";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/mock" element={<Mockman />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export { MyRoutes };
