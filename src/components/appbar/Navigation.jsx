import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser); // kullanıcı bilgisi

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
      {!isLoggedIn && <NavLink to="/login">Login</NavLink>}

      {isLoggedIn && <span>Hoş geldin, {user.name || user.email} 👋</span>}
    </nav>
  );
};

export default Navigation;
