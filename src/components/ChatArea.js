// components/ChatArea.js
import React from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatArea = ({ messages, sendMessage }) => {
	return (
		<div className='w-70% bg-white rounded-lg shadow-lg p-6'>
			<div className='mb-6 h-96 overflow-y-auto'>
				{messages.map((message) => (
					<MessageBubble
						key={message.id}
						message={message}
						isCurrentUser={message.sender.name === "You"}
					/>
				))}
			</div>
			<MessageInput sendMessage={sendMessage} />
		</div>
	);
};

export default ChatArea;
