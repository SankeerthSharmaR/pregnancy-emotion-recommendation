import React, { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ChatList from "components/ChatList";
import ChatArea from "components/ChatArea";
import MessageInput from "components/MessageInput";

export default function ChatScreen() {
	// State to store messages
	const [messages, setMessages] = useState([
		{
			id: 1,
			sender: { name: "John", avatar: "/avatars/avatar1.jpg" },
			message: "Hi there!",
			timestamp: "10:00 AM",
		},
		{
			id: 2,
			sender: { name: "Jane", avatar: "/avatars/avatar2.jpg" },
			message: "Hey, how are you?",
			timestamp: "10:05 AM",
		},
		{
			id: 3,
			sender: { name: "John", avatar: "/avatars/avatar1.jpg" },
			message: "I'm good, thanks! How about you?",
			timestamp: "10:10 AM",
		},
	]);

	// Function to handle sending a message
	const sendMessage = (newMessage) => {
		const formattedMessage = {
			id: messages.length + 1,
			sender: { name: "You", avatar: "/avatars/avatar3.jpg" },
			message: newMessage,
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};
		setMessages([...messages, formattedMessage]);
	};

	return (
		<>
			<Navbar transparent />
			<main className='min-h-screen bg-gray-900'>
				<section className='container mx-auto flex py-20'>
					<div className='w-30%'>
						<ChatList messages={messages} />
						<ChatArea
							messages={messages}
							sendMessage={sendMessage}
						/>
						<MessageInput sendMessage={sendMessage} />
					</div>
					<div className='w-70%'>{/* Other content here */}</div>
				</section>
				<Footer />
			</main>
		</>
	);
}
