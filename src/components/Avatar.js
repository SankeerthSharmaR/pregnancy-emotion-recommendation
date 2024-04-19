// components/Avatar.js
import React from "react";

const Avatar = ({ src, alt }) => {
	return (
		<img
			src={src}
			alt={alt}
			className='w-10 h-10 rounded-full mr-2'
		/>
	);
};

export default Avatar;
