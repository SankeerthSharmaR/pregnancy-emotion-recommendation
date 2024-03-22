import React, { useState } from "react";
import Navbar from "components/Navbar.js"; // Update the import path as per your project structure
import Footer from "components/Footer";
import ChatArea from "components/ChatArea";
import StoryInput from "components/StoryInput";
import RecommendedStories from "components/RecommendedStories";

export default function HomePage() {
	const [messages, setMessages] = useState([]);
	const [recommendedStories, setRecommendedStories] = useState([]);
	const [userStory, setUserStory] = useState("");
	const [showStoryInput, setShowStoryInput] = useState(true);

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

	const fetchRecommendedStories = async (input_text) => {
		try {
			const response = await fetch(
				"http://127.0.0.1:5000/recommend_stories",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ input_text }),
				},
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			return await response.json();
		} catch (error) {
			console.error("Error fetching recommended stories:", error);
			return [];
		}
	};

	const handleSubmitStory = async () => {
		if (!userStory.trim()) return;
		const stories = await fetchRecommendedStories(userStory);
		setRecommendedStories(stories);
		setShowStoryInput(false);
	};

	const handleToggleStoryInput = () => {
		setShowStoryInput(!showStoryInput);
		// Reset recommended stories states
		setRecommendedStories([]);
	};

	return (
		<>
			<Navbar transparent />
			<section className='absolute w-full h-full'>
				<div
					className='absolute top-0 w-full h-full bg-gray-900'
					style={{
						backgroundImage: `url(${
							require("assets/img/register_bg_2.png").default
						})`,
						backgroundSize: "100%",
						backgroundRepeat: "no-repeat",
					}}
				/>
				<main>
					<section className='relative w-2/3 h-full bg-gray-900'>
						<div className='container mx-auto px-4 py-20'>
							{showStoryInput && (
								<StoryInput
									userStory={userStory}
									setUserStory={setUserStory}
									handleSubmitStory={handleSubmitStory}
								/>
							)}
							<RecommendedStories
								stories={recommendedStories}
								showStoryInput={showStoryInput}
								handleToggleStoryInput={handleToggleStoryInput}
							/>
						</div>
					</section>
					<section>
						<div className='absolute top-20 right-0 w-1/3'>
							<ChatArea
								messages={messages}
								sendMessage={sendMessage}
							/>
						</div>
					</section>
				</main>
				<Footer absolute />
			</section>
		</>
	);
}
