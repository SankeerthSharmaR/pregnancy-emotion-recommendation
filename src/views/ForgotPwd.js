import FooterSmall from "components/FooterSmall.js";
import Navbar from "components/Navbar.js";
import { Link } from "react-router-dom";

export default function ForgotPwd() {
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
												Forgot Password
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

											<div className='text-center mt-6'>
												<button
													className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
													type='button'
												>
													Submit
												</button>
											</div>
										</form>
									</div>

									<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
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
