import React from 'react';
import RecommendedStories from "components/RecommendedStories";
import StoryInput from "components/StoryInput";
import StoryModal from "components/StoryModal";
import { useState } from "react";
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import backgroundImage from '../assets/img/background-pregnant-women-image.jpg'; 

export default function HomePage({ showAlert }) {
  const [userStory, setUserStory] = useState("");
  const [recommendedStories, setRecommendedStories] = useState([]);
  const [showStoryInput, setShowStoryInput] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
    author: "",
    imageUrl: null,
  });

  const fetchRecommendedStories = async (input_text) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/recommend_stories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input_text }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching recommended stories:", error);
      showAlert(
        "Failed to fetch recommended stories. Please try again later.",
        "error"
      );
      return [];
    }
  };

  const handleSubmitStory = async () => {
    if (!userStory.trim()) return;

    try {
      const stories = await fetchRecommendedStories(userStory);
      setRecommendedStories(stories);
      setShowStoryInput(false);
    } catch (error) {
      console.error("Error fetching recommended stories:", error);
      showAlert(
        "Failed to fetch recommended stories. Please try again later.",
        "error"
      );
    }
  };

  const handleToggleStoryInput = () => {
    setShowStoryInput(!showStoryInput);
    setRecommendedStories([]);
  };

  const handleModalToggle = (title, content, author, imageUrl) => {
    setIsModalOpen(!isModalOpen);
    setModalContent({ title, content, author, imageUrl });
  };

  return (
    <div className="home-page-container"> {/* Apply a custom class for styling */}
      <main className="min-h-screen flex justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', opacity: '0.5'}} />
        <div className="w-4/5 h-4/5 backdrop-blur bg-opacity-25 relative z-10">
          {showStoryInput ? (
            <StoryInput
              userStory={userStory}
              setUserStory={setUserStory}
              handleSubmitStory={handleSubmitStory}
              showAlert={showAlert}
            />
          ) : (
            <RecommendedStories
              recommendedStories={recommendedStories}
              handleModalToggle={handleModalToggle}
              handleToggleStoryInput={handleToggleStoryInput}
            />
          )}
        </div>
      </main>
      {isModalOpen && (
        <StoryModal
          isOpen={isModalOpen}
          onClose={handleModalToggle}
          title={modalContent.title}
          content={modalContent.content}
          author={modalContent.author}
          imageUrl={modalContent.imageUrl}
        />
      )}
    </div>
  );
}
