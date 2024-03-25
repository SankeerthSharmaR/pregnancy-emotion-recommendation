import React, { useState, useEffect } from "react";

function StoryModal({ isOpen, onClose, title, content, author, imageUrl }) {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	if (!showModal) return null;

	return (
		<div className='fixed inset-0 flex items-center justify-center z-100 overflow-y-auto'>
			<div className='absolute inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-40'>
				<div className='relative bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 backdrop-blur-lg'>
					<div className='bg-gray-100 rounded-lg p-4 mb-6'>
						<h2 className='text-3xl font-bold text-gray-800 mb-4'>
							{title}
						</h2>
						<div
							className='overflow-y-auto'
							style={{ maxHeight: "calc(80vh - 15rem)" }}
						>
							{imageUrl && (
								<img
									src={imageUrl}
									alt={title}
									className='mb-6 rounded-lg h-60 w-full object-cover'
								/>
							)}
							<p className='text-gray-700 text-lg mb-6 whitespace-pre-line'>
								{content}
							</p>
							<p className='text-sm text-gray-500 mb-6'>
								By {author}
							</p>
						</div>
					</div>
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
}

export default StoryModal;
