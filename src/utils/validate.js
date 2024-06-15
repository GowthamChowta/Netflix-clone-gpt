export const validateFormInputs = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
    password
  );

  if (!isEmailValid) return "Email id is invalid";
  // if (!isPasswordValid) return "Password is invalid";
  return null;
};
