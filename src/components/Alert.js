import React from "react";

const Alert = ({ message, type, onClose }) => {
	if (!message || !type) {
		return null;
	}

	return (
		<div className='fixed top-5 right-5 z-50'>
			<div
				className={`bg-white rounded-lg p-4 border ${
					type === "error" ? "border-red-500" : "border-green-500"
				} shadow-md`}
			>
				<div className='flex items-center justify-between mb-2'>
					<h2
						className={`text-lg font-semibold ${
							type === "error" ? "text-red-500" : "text-green-500"
						}`}
					>
						{type === "error" ? "Error" : "Success"}
					</h2>
					<button
						onClick={onClose}
						className='text-gray-500 hover:text-gray-700 focus:outline-none'
					>
						<svg
							className='h-5 w-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6 18L18 6M6 6L18 18'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
				<p className='text-gray-700 text-sm'>{message}</p>
			</div>
		</div>
	);
};

export default Alert;
