// components/SocialLoginButton.js
import React from "react";

const SocialLoginButton = ({ icon, text }) => {
	return (
		<div className='btn-wrapper text-center'>
			<button
				className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
				type='button'
			>
				<img
					alt='...'
					className='w-5 mr-1'
					src={require("assets/img/google.svg").default}
				/>
				Google
			</button>
		</div>
	);
};

export default SocialLoginButton;
