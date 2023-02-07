import { Form, Formik, useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Login = () => {
  return (
    <div className="">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        <Form className="">
          <MyTextInput
            className=""
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            className=""
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            className=""
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <button type="submit" className="submit-btn">
            submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
