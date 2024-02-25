// components/ForgotPasswordFrom.js
import React from "react";
import EmailInput from "components/EmailInput";
import { Link } from "react-router-dom";

const ForgotPasswordFrom = ({
	email,
	emailError,
	handleInputChange,
	handleSubmit,
}) => {
	return (
		<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
			<div className='rounded-t mb-0 px-6 py-6'>
				{/* Forgot Password heading */}
				<div className='text-center mb-3'>
					<h2 className='text-gray-600 text-3xl font-bold'>
						Forgot Password
					</h2>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit}>
					{/* Email input */}
					<EmailInput
						value={email}
						onChange={handleInputChange}
						error={emailError}
					/>

					{/* Forgot Password button */}
					<div className='text-center mt-6'>
						<button
							className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
							type='submit'
						>
							Forgot Password
						</button>
					</div>
				</form>
				{/* Or sign up */}
				<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
					<div className='flex justify-center mt-6'>
						<div className='text-center'>
							<Link
								to='/signup'
								className='text-gray-700'
							>
								<small>Don't have an account? Sign Up</small>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPasswordFrom;
