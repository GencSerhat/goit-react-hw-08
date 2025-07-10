import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "En az 2 karakter olmalı").required("Zorunlu"),
    email: Yup.string().email("Geçersiz email").required("Zorunlu alan"),
    password: Yup.string().min(6, "En az 6 karakter").required("Zorunlu"),
  });
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" style={{ color: "red" }} />

        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: "red" }}
        />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
