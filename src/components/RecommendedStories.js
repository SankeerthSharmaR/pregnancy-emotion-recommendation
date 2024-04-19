const RecommendedStories = ({
	recommendedStories,
	handleModalToggle,
	handleToggleStoryInput,
}) => {
	return (
		<div>
			<h2 className='text-xl font-bold mb-4'>
				Top 5 Stories Based on Your Input
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 backdrop-filter backdrop-blur-lg bg-opacity-25'>
				{recommendedStories.map((story, index) => (
					<div
						key={index}
						className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer ${
							index === 3 || index === 4 ? "ml-auto" : ""
						}`}
						onClick={() =>
							handleModalToggle(
								`Story ${index + 1}`,
								story,
								"Anonymous",
								null,
							)
						}
					>
						<h2 className='text-gray-800 text-lg font-bold mb-2'>{`Story ${
							index + 1
						}`}</h2>
						<p className='text-gray-600'>
							{story.slice(0, 100)}...
						</p>
						<p className='text-sm text-gray-500 mb-2'>
							By Anonymous
						</p>
						<button
							className='text-blue-500 font-semibold hover:text-blue-600 mt-2 inline-block'
							onClick={(e) => {
								e.stopPropagation();
								handleModalToggle(
									`Story ${index + 1}`,
									story,
									"Anonymous",
									null,
								);
							}}
						>
							Read more
						</button>
					</div>
				))}
				{recommendedStories.length <= 5 && (
					<div
						className='bg-white rounded-lg shadow-lg p-6 flex items-center justify-center cursor-pointer'
						onClick={handleToggleStoryInput}
					>
						<span className='text-blue-500 font-semibold'>
							Edit Your Story
						</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default RecommendedStories;
