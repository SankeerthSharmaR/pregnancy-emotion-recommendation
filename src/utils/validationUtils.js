// validationUtils.js
export const validateEmail = (email) => {
    // Simple email validation logic
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  export const validatePassword = (password) => {
    // Basic password validation (e.g., minimum length)
    return password && password.length >= 6;
  };
  