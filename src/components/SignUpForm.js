import React from "react";
import EmailInput from "components/EmailInput";
import PasswordInput from "components/PasswordInput";
import { Link } from "react-router-dom";
import SocialMediaButtons from "components/SocialMediaButtons";

const SignUpForm = ({
	handleSubmit,
	handleInputChange,
	email,
	password,
	showPassword,
	passwordError,
	togglePasswordVisibility,
	confirmPassword,
}) => {
	return (
		<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
			<div className='rounded-t mb-0 px-6 py-6'>
				{/* Sign up heading */}
				<div className='text-center mb-3'>
					<h2 className='text-gray-600 text-3xl font-bold'>
						Sign Up
					</h2>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit}>
					{/* Email input */}
					<EmailInput
						id='email'
						value={email}
						onChange={handleInputChange}
						placeholder='Email'
					/>

					{/* Password input */}
					<PasswordInput
						id='password'
						value={password}
						onChange={handleInputChange}
						error={passwordError}
						showPassword={showPassword}
						toggleVisibility={togglePasswordVisibility}
						inputProps={{ placeholder: "Password" }}
					/>

					{/* Confirm Password input */}
					<PasswordInput
						id='confirm-password'
						value={confirmPassword}
						onChange={handleInputChange}
						error={passwordError}
						showPassword={showPassword}
						toggleVisibility={togglePasswordVisibility}
						inputProps={{ placeholder: "Confirm Password" }}
					/>

					{/* Sign up button */}
					<div className='text-center mt-6'>
						<button
							className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
							type='submit'
						>
							Sign Up
						</button>
					</div>
				</form>

				{/* Or sign up with social accounts */}
				<hr className='mt-6 border-b-1 border-gray-400' />
				<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
					<div className='text-gray-500 text-center mb-3 font-bold'>
						<small>Or sign up with</small>
					</div>
					<SocialMediaButtons />
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
