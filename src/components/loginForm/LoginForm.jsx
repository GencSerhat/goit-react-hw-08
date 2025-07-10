import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Geçersiz email").required("Zorunlu alan"),
    password: Yup.string()
      .min(6, "En az 6 karakter girilmeli")
      .required("Zorunlu alan"),
  });
  return (
    <Formik initialValues={{ email: "", password: "" }}
      validatinSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" style={{ colorr: "red" }} />

        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: "red" }}
        />
          <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;