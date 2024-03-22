// components/ChatList.js
import React from "react";
import Avatar from "./Avatar";

const ChatList = ({ messages }) => {
	return (
		<div className='w-30% bg-white rounded-lg shadow-lg p-4 mr-4'>
			<h2 className='text-gray-800 text-lg font-bold mb-4'>
				Recent Chats
			</h2>
			<div className='overflow-y-auto max-h-[calc(100vh-100px)]'>
				{messages.map((message) => (
					<div
						key={message.id}
						className='flex items-center mb-4'
					>
						<Avatar
							src={message.sender.avatar}
							alt='Avatar'
						/>
						<div>
							<div className='font-semibold'>
								{message.sender.name}
							</div>
							<div className='text-gray-500 text-sm'>
								{message.message}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChatList;
