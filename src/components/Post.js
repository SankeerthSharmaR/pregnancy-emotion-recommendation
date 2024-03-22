import React, { useState, useEffect } from "react";

// Modal Component for Full-Screen Story View
const StoryModal = ({ isOpen, onClose, title, content, author, imageUrl }) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	if (!showModal) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto'>
			<div className='flex items-center justify-center min-h-screen'>
				<div className='relative bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8'>
					<button
						onClick={onClose}
						className='absolute top-4 right-4 text-lg text-gray-600 hover:text-gray-900 focus:outline-none'
					>
						×
					</button>
					{imageUrl && (
						<img
							src={imageUrl}
							alt={title}
							className='mb-6 rounded-lg max-h-80 w-full object-cover'
						/>
					)}
					<h2 className='text-3xl font-bold text-gray-800 mb-4'>
						{title}
					</h2>
					<p className='text-gray-700 text-lg mb-6 whitespace-pre-line'>
						{content}
					</p>
					<p className='text-sm text-gray-500 mb-6'>By {author}</p>
					<button
						onClick={onClose}
						className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export const Post = ({
	title = "Untitled",
	author = "Anonymous",
	content,
	imageUrl = null,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleModalToggle = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className='bg-white rounded-lg shadow-lg p-6'>
			<h2 className='text-gray-800 text-lg font-bold mb-2'>{title}</h2>
			{imageUrl && (
				<img
					src={imageUrl}
					alt={title}
					className='mb-4 rounded-lg'
				/>
			)}
			<p className='text-gray-600'>{content.slice(0, 100)}...</p>
			<p className='text-sm text-gray-500 mb-2'>By {author}</p>
			<button
				onClick={handleModalToggle}
				className='text-blue-500 font-semibold hover:text-blue-600 mt-2 inline-block'
			>
				Read more
			</button>
			<StoryModal
				isOpen={isModalOpen}
				onClose={handleModalToggle}
				title={title}
				content={content}
				author={author}
				imageUrl={imageUrl}
			/>
		</div>
	);
};
