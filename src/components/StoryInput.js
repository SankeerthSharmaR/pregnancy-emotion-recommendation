// components/StoryInput.js
import React from "react";

const StoryInput = ({ userStory, setUserStory, handleSubmitStory }) => {
	return (
		<div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
			<textarea
				value={userStory}
				onChange={(e) => setUserStory(e.target.value)}
				className='w-full border-2 border-gray-300 p-2 rounded-md'
				placeholder='Write your story here...'
				rows='4'
			/>
			<button
				onClick={handleSubmitStory}
				className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
			>
				Submit Story
			</button>
		</div>
	);
};

export default StoryInput;
