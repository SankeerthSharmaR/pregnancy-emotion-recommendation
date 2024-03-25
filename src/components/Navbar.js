import React from "react";

export default function Navbar(props) {
	return (
		<>
			<nav className='fixed top-0 w-full z-50 backdrop-blur'>
				<div className='container px-4 mx-auto flex items-center justify-between py-3'>
					<div>
						<a
							className='text-gray-200 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
							href='/'
						>
							PregPal
						</a>
					</div>
				</div>
				<div className='h-px bg-white opacity-25'></div>
			</nav>
		</>
	);
}
