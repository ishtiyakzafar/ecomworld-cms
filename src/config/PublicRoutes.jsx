import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ADMIN_ROLE } from "../Helper/constant";

const PublicRoutes = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn && user.role !== ADMIN_ROLE) {
    return <Navigate to="/" />;
  }

  if (isLoggedIn && user.role === ADMIN_ROLE) {
    return <Navigate to="/products" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
