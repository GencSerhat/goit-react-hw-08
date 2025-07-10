import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();

  const { name } = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {name}!</p>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};
export default UserMenu;
