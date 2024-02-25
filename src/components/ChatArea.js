// components/ChatArea.js
import React from "react";
import MessageBubble from "./MessageBubble";

const ChatArea = ({ messages }) => {
	return (
		<div className='flex-1 bg-white rounded-lg shadow-lg p-6'>
			<div className='mb-6 h-96 overflow-y-auto'>
				{messages.map((message) => (
					<MessageBubble
						key={message.id}
						message={message}
						isCurrentUser={message.sender.name === "You"}
					/>
				))}
			</div>
		</div>
	);
};

export default ChatArea;
