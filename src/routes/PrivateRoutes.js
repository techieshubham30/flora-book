import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const authToken = useSelector((state) => state.auth.authToken);
  const location = useLocation();
  return authToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoutes };
