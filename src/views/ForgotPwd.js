import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ForgotPasswordFrom from "components/ForgotPasswordFrom";

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
								<ForgotPasswordFrom
									email={email}
									emailError={emailError}
									handleInputChange={handleInputChange}
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
