type values_type = {
  email?: string;
  password?: string;
};

export default function login_validation(values: values_type) {
  const errors: values_type = {};

  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required!";
  }

  return errors;
}
