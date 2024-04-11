import ForgotPasswordForm from "components/ForgotPasswordForm";
import { useState } from "react";
import backgroundImage from '../assets/img/background-pregnant-women-image.jpg'; 

export default function Login() {
  // State for form fields and validation
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
      // Validation logic can be added here if required
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
      <main className="min-h-screen flex justify-center items-center relative"></main>
      <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', opacity: '0.5'}} />
      <div className="w-2/5 h-3/5 backdrop-blur bg-opacity-25 relative z-10">
          <ForgotPasswordForm
            email={email}
            emailError={emailError}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
}
