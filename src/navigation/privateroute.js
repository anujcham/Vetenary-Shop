import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const isAuth = useSelector((state)=> state.auth.isAuth )

  console.log("isAuth",isAuth);

  return isAuth ? <>{children}</> : <Navigate to="/login" />;
}

export {
  PrivateRoute
}