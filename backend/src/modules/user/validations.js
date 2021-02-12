const validateLogin = (email, password) => {
  const errors = "";
  const valid = true;
  if (!email || !password) {
    return { valid: false, errors: "Email and password are required fields" };
  }
  return { valid, errors };
};

const validateRegister = (firstName, lastName, email, password) => {
  const errors = "";
  const valid = true;
  if (!firstName || !lastName || !email || !password) {
    return { valid: false, errors: "All fields are required" };
  }
  return { valid, errors };
};

export {
  validateLogin,
  validateRegister
};
