import {NavLink} from "react-router-dom";

const AuthNav = () => {
    return (
        <div>
            <NavLink to="/register">Registerl</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};
export default AuthNav;