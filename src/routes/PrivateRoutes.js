import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({children}) => {
  const authToken = useSelector((state) => state.auth.authToken);
  const location = useLocation();
  return authToken ? (
   children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoutes };
