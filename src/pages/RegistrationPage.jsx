import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import RegisterForm from "../components/registerForm/RegisterForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h2>Kayıt Ol</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
