import React from "react";

const StoryInput = ({ userStory, setUserStory, handleSubmitStory }) => {
	return (
		<div className='rounded-lg shadow-md p-6 mb-8 backdrop-filter backdrop-blur-lg bg-gray-900 bg-opacity-50'>
			<h2 className='text-2xl font-bold mb-4 text-white'>
				Share Your Story
			</h2>
			<div className='bg-gray-800 rounded-md p-3 mb-4'>
				<textarea
					value={userStory}
					onChange={(e) => setUserStory(e.target.value)}
					className='w-full bg-transparent border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500 text-white'
					placeholder='Write your story here...'
					rows='8'
				/>
			</div>
			<button
				onClick={handleSubmitStory}
				className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
			>
				Submit Story
			</button>
		</div>
	);
};

export default StoryInput;
