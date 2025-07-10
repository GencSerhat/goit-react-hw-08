import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/contacts">Contacts</Link>
            <span className={styles.userInfo}>{user.email}</span>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
