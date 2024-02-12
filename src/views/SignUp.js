import FooterSmall from "components/FooterSmall.js";
import Navbar from "components/Navbar.js";
import { Link } from "react-router-dom";

export default function SignUp() {
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
												Sign Up
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
													className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
													placeholder='Email'
												/>
											</div>

											<div className='relative w-full mb-3'>
												<label
													htmlFor='password'
													className='block uppercase text-gray-700 text-xs font-bold mb-2'
												>
													Password
												</label>
												<input
													type='password'
													id='password'
													className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
													placeholder='Password'
												/>
											</div>

											<div className='relative w-full mb-3'>
												<label
													htmlFor='confirm-password'
													className='block uppercase text-gray-700 text-xs font-bold mb-2'
												>
													Confirm Password
												</label>
												<input
													type='password'
													id='confirm-password'
													className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
													placeholder='Confirm Password'
												/>
											</div>

											<div className='text-center mt-6'>
												<button
													className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
													type='button'
												>
													Sign Up
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
													to='/login'
													className='text-gray-700'
												>
													<small>
														Already have an account?
														Sign In
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
