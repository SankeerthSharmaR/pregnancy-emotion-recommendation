// components/SignUpForm.js
import React from "react";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import NameInput from "components/NameInput";
import { Link } from "react-router-dom";

const SignUpForm = ({
	handleSubmit,
	handleInputChange,
	name,
	nameError,
	email,
	emailError,
	password,
	showPassword,
	passwordError,
	togglePasswordVisibility,
	confirmPassword,
}) => {
	return (
		<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg bg-gray-100 border-0'>
			<div className='rounded-t mb-0 px-6 py-6'>
				<div className='text-center mb-3'>
					<h2 className='text-gray-800 text-3xl font-bold'>
						Sign Up
					</h2>
				</div>
				<form onSubmit={handleSubmit}>

					<NameInput
						value={name}
						onChange={handleInputChange}
						error={nameError}
					/>

					<EmailInput
						value={email}
						onChange={handleInputChange}
						error={emailError}
					/>
					<PasswordInput
						id='password'
						value={password}
						onChange={handleInputChange}
						error={passwordError}
						showPassword={showPassword}
						toggleVisibility={togglePasswordVisibility}
						inputProps={{ placeholder: "Password" }}
					/>
					<PasswordInput
						id='confirm-password'
						value={confirmPassword}
						onChange={handleInputChange}
						error={passwordError}
						showPassword={showPassword}
						toggleVisibility={togglePasswordVisibility}
						inputProps={{ placeholder: "Confirm Password" }}
					/>
					<div className='text-center mt-6'>
						<button
							className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
							type='submit'
						>
							Sign Up
						</button>
					</div>
				</form>
				<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
					<div className='flex justify-center mt-6'>
						<div className='text-center'>
							<Link
								to='/login'
								className='text-gray-700'
							>
								<small>Already have an account? Sign In</small>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
