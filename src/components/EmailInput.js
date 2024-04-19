// components/EmailInput.js
import React from "react";

const EmailInput = ({ value, onChange, error }) => {
	return (
		<div className='relative w-full mb-3'>
			<input
				type='email'
				id='email'
				value={value}
				onChange={onChange}
				className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
				placeholder='Email'
			/>
			{error && <p className='text-red-500 text-xs italic'>{error}</p>}
		</div>
	);
};

export default EmailInput;
