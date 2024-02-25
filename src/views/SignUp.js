import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import SignUpForm from "components/SignUpForm";

export default function SignUp() {
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
			// Validation logic can be added here if required
		} else if (id === "password") {
			setPassword(value);
			// Validation logic can be added here if required
		} else if (id === "confirm-password") {
			setConfirmPassword(value);
			// Validation logic can be added here if required
		}
	};

	// Toggle password visibility
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Form submission logic can be added here
	};

	return (
		<>
			<Navbar transparent />
			<main>
				<section className='absolute w-full h-full'>
					<div
						className='absolute top-0 w-full h-full bg-gray-900'
						style={{
							backgroundImage: `url(${
								require("assets/img/register_bg_2.png").default
							})`,
							backgroundSize: "100%",
							backgroundRepeat: "no-repeat",
						}}
					/>
					<div className='container mx-auto px-4 h-full'>
						<div className='flex content-center items-center justify-center h-full'>
							<div className='w-full lg:w-4/12 px-4'>
								<SignUpForm
									email={email}
									password={password}
									confirmPassword={confirmPassword}
									emailError={emailError}
									passwordError={passwordError}
									showPassword={showPassword}
									handleInputChange={handleInputChange}
									togglePasswordVisibility={
										togglePasswordVisibility
									}
									handleSubmit={handleSubmit}
								/>
							</div>
						</div>
					</div>
					<Footer absolute />
				</section>
			</main>
		</>
	);
}
