import FooterSmall from "components/FooterSmall.js";
import Navbar from "components/Navbar.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "utils/validationUtils";

export default function Login() {
	// State for form fields and validation
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	// Handle input change
	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "email") {
			setEmail(value);
			if (!validateEmail(value)) {
				setEmailError("Invalid email address");
			} else {
				setEmailError("");
			}
		} else if (id === "password") {
			setPassword(value);
			if (!validatePassword(value)) {
				setPasswordError("Password must be at least 6 characters");
			} else {
				setPasswordError("");
			}
		}
	};

	// Toggle password visibility
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
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
								<div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
									<div className='rounded-t mb-0 px-6 py-6'>
										<div className='text-center mb-3'>
											<h2 className='text-gray-600 text-3xl font-bold'>
												Sign in
											</h2>
										</div>
										<form>
											<div className='relative w-full mb-3'>
												<label
													htmlFor='email'
													className='block uppercase text-gray-700 text-xs font-bold mb-2'
												>
													Email
												</label>
												<input
													type='email'
													id='email'
													value={email}
													onChange={handleInputChange}
													className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
													placeholder='Email'
												/>

												{emailError && (
													<p className='text-red-500 text-xs italic'>
														{emailError}
													</p>
												)}
											</div>

											<label
												htmlFor='password'
												className='block uppercase text-gray-700 text-xs font-bold mb-2'
											>
												Password
											</label>

											<div className='relative w-full mb-3 flex items-center'>
												<input
													type={
														showPassword
															? "text"
															: "password"
													}
													id='password'
													value={password}
													onChange={handleInputChange}
													className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
													placeholder='Password'
												/>
												<button
													type='button'
													onClick={
														togglePasswordVisibility
													}
													className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
												>
													{showPassword ? (
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															strokeWidth={1.5}
															stroke='currentColor'
															className='w-6 h-6'
														>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
															/>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
															/>
														</svg>
													) : (
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															strokeWidth={1.5}
															stroke='currentColor'
															className='w-6 h-6'
														>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
															/>
														</svg>
													)}
												</button>
											</div>

											{passwordError && (
												<p className='text-red-500 text-xs italic'>
													{passwordError}
												</p>
											)}

											<div className='flex items-center justify-between mt-6'>
												<div className='flex items-center'>
													<input
														id='remember-me'
														type='checkbox'
														className='form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5'
														style={{
															transition:
																"all .15s ease",
														}}
													/>
													<label
														htmlFor='remember-me'
														className='ml-2 text-sm font-semibold text-gray-700'
													>
														Remember me
													</label>
												</div>
												<Link
													to='/forgot'
													className='text-sm font-semibold text-gray-700 hover:text-gray-900'
												>
													Forgot password?
												</Link>
											</div>

											<div className='text-center mt-6'>
												<button
													className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
													type='button'
												>
													Sign In
												</button>
											</div>
										</form>
										<hr className='mt-6 border-b-1 border-gray-400' />
									</div>

									<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
										<div className='text-gray-500 text-center mb-3 font-bold'>
											<small>Or sign in with</small>
										</div>
										<div className='btn-wrapper text-center'>
											<button
												className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
												type='button'
											>
												<img
													alt='...'
													className='w-5 mr-1'
													src={
														require("assets/img/google.svg")
															.default
													}
												/>
												Google
											</button>
										</div>

										<div className='flex justify-center mt-6'>
											<div className='text-center'>
												<Link
													to='/signup'
													className='text-gray-700'
												>
													<small>
														Don't have an account?
														Sign Up
													</small>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<FooterSmall absolute />
				</section>
			</main>
		</>
	);
}
