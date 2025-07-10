// import { Navigate, redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
// };

// export default RestrictedRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
