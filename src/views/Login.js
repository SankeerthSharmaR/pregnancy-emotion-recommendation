// components/LoginPage.js
import LoginForm from "components/LoginForm";
import { useState } from "react";
import axiosInstance from "utils/axios";
import backgroundImage from "../assets/img/background-pregnant-women-image.jpg";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ showAlert }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

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

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axiosInstance.post("/login", {
				email: email,
				password: password,
			});
			if (response && response.data && response.data.token) {
				const token = response.data.token;
				localStorage.setItem("token", token);
				const decodedToken = jwtDecode(token);
				const userName = decodedToken.name;
				localStorage.setItem("username", userName);
				showAlert("Login successful!", "success");
				navigate("/home");
			} else {
				console.error("Login failed: Invalid response format");
				showAlert("Login failed. Please try again.", "error");
			}
		} catch (error) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				console.error("Login failed:", error.response.data.message);
				showAlert(error.response.data.message, "error");
			} else if (error.message) {
				console.error("Login failed:", error.message);
				showAlert(
					"An error occurred. Please try again later.",
					"error",
				);
			} else {
				console.error("Login failed: Unknown error");
				showAlert(
					"An unknown error occurred. Please try again later.",
					"error",
				);
			}
		}
	};

	return (
		<main className='min-h-screen flex justify-center items-center'>
			<main className='min-h-screen flex justify-center items-center relative'></main>
			<div
				className='absolute top-0 left-0 w-full h-full'
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					opacity: "0.5",
				}}
			/>
			<div className='w-2/5 h-3/5 backdrop-blur bg-opacity-25 relative z-10'>
				<LoginForm
					email={email}
					password={password}
					emailError={emailError}
					passwordError={passwordError}
					showPassword={showPassword}
					handleInputChange={handleInputChange}
					togglePasswordVisibility={togglePasswordVisibility}
					handleSubmit={handleSubmit}
				/>
			</div>
		</main>
	);
}
