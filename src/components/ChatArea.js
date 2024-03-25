import React from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatArea = ({ messages, sendMessage }) => {
	const scrollToBottom = () => {
		const chatContainer = document.getElementById("chat-container");
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	};

	return (
		<div className='h-full bg-white rounded-lg shadow-lg p-6 border border-gray-200'>
			<div
				id='chat-container'
				className='mb-6 h-96 overflow-y-auto bg-gray-100 rounded-t'
			>
				{messages.map((message) => (
					<MessageBubble
						key={message.id}
						message={message}
						isCurrentUser={message.sender.name === "You"}
					/>
				))}
			</div>
			<MessageInput
				className='bg-gray-200'
				sendMessage={(msg) => {
					sendMessage(msg);
					scrollToBottom();
				}}
			/>
		</div>
	);
};

export default ChatArea;
