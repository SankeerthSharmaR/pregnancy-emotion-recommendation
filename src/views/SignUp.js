import { useState } from "react";
import SignUpForm from "components/SignUpForm";
import axiosInstance from "utils/axios";
import backgroundImage from '../assets/img/background-pregnant-women-image.jpg'; 

export default function SignUp({ showAlert }) {
  // State for form fields and validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
      // Email validation
      if (!value || !/\S+@\S+\.\S+/.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    } else if (id === "password") {
      setPassword(value);
      // Password validation
      if (!value || value.length < 6) {
        setPasswordError("Password must be at least 6 characters long");
      } else {
        setPasswordError("");
      }
    } else if (id === "confirm-password") {
      setConfirmPassword(value);
      // Confirm password validation
      if (value !== password) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/signup", {
        username: email,
        password: password,
      });
      if (response && response.data && response.data.message) {
        console.log("Sign up successful!");
        showAlert("Sign up successful!", "success"); // Display success message
      } else {
        console.error("Sign up failed: Invalid response format");
        showAlert("Sign up failed. Please try again.", "error"); // Display error message
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.error("Sign up failed:", error.response.data.message);
        showAlert(error.response.data.message, "error"); // Display error message
      } else if (error.message) {
        console.error("Sign up failed:", error.message);
        showAlert(
          "An error occurred. Please try again later.",
          "error",
        ); // Display error message
      } else {
        console.error("Sign up failed: Unknown error");
        showAlert(
          "An unknown error occurred. Please try again later.",
          "error",
        ); // Display error message
      }
    }
  };

  return (
    <div className="home-page-container"> {/* Apply a custom class for styling */}
      <main className="min-h-screen flex justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', opacity: '0.5'}} />
        <div className="w-2/5 h-3/5 backdrop-blur bg-opacity-25 relative z-10">
          <SignUpForm
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            emailError={emailError}
            passwordError={passwordError}
            showPassword={showPassword}
            handleInputChange={handleInputChange}
            togglePasswordVisibility={togglePasswordVisibility}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
}
