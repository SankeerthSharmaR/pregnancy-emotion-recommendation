import ForgotPasswordForm from "components/ForgotPasswordForm";
import { useState } from "react";

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
        <div className="w-2/5 h-3/5 backdrop-blur bg-opacity-25">
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
