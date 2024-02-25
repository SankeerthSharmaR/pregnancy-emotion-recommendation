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
	buttonProps,
	errorProps,
}) => {
	return (
		<div className='relative w-full mb-3 flex items-center'>
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
				{...buttonProps}
				className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
			>
				{showPassword ? (
					<EyeSlashIcon className='h-6 w-6 text-gray-500' />
				) : (
					<EyeIcon className='h-6 w-6 text-gray-500' />
				)}
			</button>
			{error && (
				<p
					{...errorProps}
					className='text-red-500 text-xs italic'
				>
					{error}
				</p>
			)}
		</div>
	);
};

export default PasswordInput;
