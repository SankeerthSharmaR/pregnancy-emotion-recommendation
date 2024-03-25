import React from "react";

export const Post = ({ title = "Untitled", content, onClick }) => {
	return (
		<div
			className='bg-white rounded-lg shadow-lg p-6 cursor-pointer'
			onClick={onClick}
		>
			<h2 className='text-gray-800 text-lg font-bold mb-2'>{title}</h2>
			<p className='text-gray-600'>{content.slice(0, 100)}...</p>
		</div>
	);
};
