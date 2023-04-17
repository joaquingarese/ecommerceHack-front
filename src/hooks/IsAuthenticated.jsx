import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function IsAuthenticated() {
  const authentication = useSelector((state) => state.user);

  if (authentication.token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default IsAuthenticated;
