import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const PasswordInput = ({
	id,
	value,
	onChange,
	error,
	showPassword,
	toggleVisibility,
	inputProps,
}) => {
	return (
		<div className='relative w-full mb-3'>
			<div className='relative'>
				<input
					type={showPassword ? "text" : "password"}
					id={id}
					value={value}
					onChange={onChange}
					{...inputProps}
					className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
					placeholder={inputProps.placeholder || "Password"}
				/>
				<button
					type='button'
					onClick={toggleVisibility}
					className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none'
				>
					{showPassword ? (
						<EyeSlashIcon className='h-6 w-6' />
					) : (
						<EyeIcon className='h-6 w-6' />
					)}
				</button>
			</div>
			{error && (
				<div className='mt-1'>
					<p className='text-red-500 text-xs italic'>{error}</p>
				</div>
			)}
		</div>
	);
};

export default PasswordInput;
