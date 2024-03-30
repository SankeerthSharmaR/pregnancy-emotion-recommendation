import React from "react";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import { Link } from "react-router-dom";

const LoginForm = ({
  email,
  password,
  emailError,
  passwordError,
  showPassword,
  handleInputChange,
  togglePasswordVisibility,
  handleSubmit,
}) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg bg-gray-100 border-0">
      <div className="rounded-t mb-0 px-6 py-6">
        {/* Sign in heading */}
        <div className="text-center mb-3">
          <h2 className="text-gray-800 text-3xl font-bold">Sign in</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <EmailInput
            value={email}
            onChange={handleInputChange}
            error={emailError}
          />
          {/* Password input */}
          <PasswordInput
            id="password"
            value={password}
            onChange={handleInputChange}
            error={passwordError}
            showPassword={showPassword}
            toggleVisibility={togglePasswordVisibility}
            inputProps={{ placeholder: "Password" }}
          />
          {/* Remember me */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                style={{ transition: "all .15s ease" }}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm font-semibold text-gray-700"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgot"
              className="text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              Forgot password?
            </Link>
          </div>
          {/* Sign in button */}
          <div className="text-center mt-6">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="flex justify-center mt-6">
            <div className="text-center">
              <Link to="/signup" className="text-gray-700">
                <small>Don't have an account? Sign Up</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
