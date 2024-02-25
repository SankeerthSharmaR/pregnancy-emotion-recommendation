// components/MessageBubble.js
import React from "react";

const MessageBubble = ({ message, isCurrentUser }) => {
	return (
		<div className={`flex mb-4 ${isCurrentUser ? "justify-end" : ""}`}>
			{!isCurrentUser && (
				<img
					src={message.sender.avatar}
					alt='Avatar'
					className='w-10 h-10 rounded-full mr-4'
				/>
			)}
			<div
				className={`flex flex-col ${
					isCurrentUser ? "items-end" : "items-start"
				}`}
			>
				<div className='flex items-center mb-1'>
					{!isCurrentUser && (
						<span className='font-semibold mr-2'>
							{message.sender.name}
						</span>
					)}
					<span className='text-gray-500 text-xs'>
						{message.timestamp}
					</span>
				</div>
				<div
					className={`rounded-lg p-4 ${
						isCurrentUser
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-800"
					}`}
				>
					{message.message}
				</div>
			</div>
		</div>
	);
};

export default MessageBubble;
