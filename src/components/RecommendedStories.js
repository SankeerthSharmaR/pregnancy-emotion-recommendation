// components/RecommendedStories.js
import React from "react";
import { Post } from "./Post";

const RecommendedStories = ({
	stories,
	handleToggleStoryInput,
	showStoryInput,
}) => {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{stories.map((story, index) => (
					<Post
						key={index}
						title={`Story ${index + 1}`}
						content={story}
					/>
				))}
				{stories.length >= 5 && (
					<div
						className='bg-white rounded-lg shadow-lg p-6 flex items-center justify-center cursor-pointer'
						onClick={handleToggleStoryInput}
					>
						<span className='text-blue-500 font-semibold'>
							Edit Story
						</span>
					</div>
				)}
			</div>
			{!showStoryInput && stories.length > 0 && (
				<button
					onClick={handleToggleStoryInput}
					className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
				>
					Write a New Story
				</button>
			)}
		</>
	);
};

export default RecommendedStories;
