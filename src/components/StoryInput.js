import React from "react";

const StoryInput = ({ userStory, setUserStory, handleSubmitStory }) => {
  return (
    <div className="rounded-lg shadow-lg p-6 mb-8 backdrop-filter backdrop-blur-2xl bg-white/30 border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Share Your Story
      </h2>
      <div className="bg-white/60 rounded-md p-3 mb-4 shadow-sm">
        <textarea
          value={userStory}
          onChange={(e) => setUserStory(e.target.value)}
          className="w-full bg-transparent border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          placeholder="Write your story here..."
          rows="8"
        />
      </div>
      <button
        onClick={handleSubmitStory}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Story
      </button>
    </div>
  );
};

export default StoryInput;
