import React from "react";

export default function Footer() {
	return (
		<>
			<footer className='fixed bottom-0 w-full z-50 backdrop-blur'>
				<div className='container mx-auto px-4'>
					<hr className='mb-6 border-b-1 border-gray-100' />
					<div className='flex flex-wrap items-center justify-center'>
						<div className='w-full md:w-4/12 px-4 text-center'>
							<div className='text-sm text-white font-semibold py-1'>
								Copyright © {new Date().getFullYear()}{" "}
								<a
									href='/'
									className='text-white hover:text-gray-400 text-sm font-semibold py-1'
								>
									Your Company Name
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='h-px bg-white opacity-25'></div>
			</footer>
		</>
	);
}
