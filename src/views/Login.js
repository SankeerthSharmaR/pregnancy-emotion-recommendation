import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import LoginForm from "components/LoginForm";
import axiosInstance from "utils/axios";

export default function Login() {
	// State for form fields and validation
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

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
		}
	};

	// Toggle password visibility
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosInstance.post("/login", {
				username: email,
				password: password,
			});
			if (response && response.data && response.data.token) {
				const token = response.data.token;
				localStorage.setItem("token", token);
				console.log("Login successful!");
				// Redirect to the home page or any other route
			} else {
				console.error("Login failed: Invalid response format");
				// Show a generic error message to the user
				// Example: setError("Login failed. Please try again.");
			}
		} catch (error) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				console.error("Login failed:", error.response.data.message);
				// Show the error message received from the server to the user
				// Example: setError(error.response.data.message);
			} else if (error.message) {
				console.error("Login failed:", error.message);
				// Show a generic error message to the user
				// Example: setError("An error occurred. Please try again later.");
			} else {
				console.error("Login failed: Unknown error");
				// Show a generic error message to the user
				// Example: setError("An unknown error occurred. Please try again later.");
			}
		}
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
								<LoginForm
									email={email}
									password={password}
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
