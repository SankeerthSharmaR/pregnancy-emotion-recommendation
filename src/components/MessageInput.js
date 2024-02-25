// components/MessageInput.js
import React, { useState } from "react";

const MessageInput = ({ sendMessage }) => {
	const [inputMessage, setInputMessage] = useState("");

	const handleSendMessage = () => {
		if (inputMessage.trim() !== "") {
			sendMessage(inputMessage.trim());
			setInputMessage("");
		}
	};

	return (
		<div className='flex'>
			<input
				type='text'
				value={inputMessage}
				onChange={(e) => setInputMessage(e.target.value)}
				placeholder='Type your message...'
				className='flex-1 border rounded px-4 py-2 mr-2 focus:outline-none focus:ring'
			/>
			<button
				onClick={handleSendMessage}
				className='bg-blue-500 text-white px-4 py-2 rounded focus:outline-none'
			>
				Send
			</button>
		</div>
	);
};

export default MessageInput;
