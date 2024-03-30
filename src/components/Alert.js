import React, { useState, useEffect } from "react";

const Alert = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 50000000); // Adjust the duration as needed

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, [onClose]);

  if (!message || !type || !isVisible) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-50 flex justify-center">
      <div className="mt-4 w-full max-w-md px-4">
        <div
          className={`bg-white rounded-lg shadow-lg p-4 ${
            type === "error" ? "border-red-500" : "border-green-500"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`text-lg font-semibold ${
                type === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {type === "error" ? "Error" : "Success"}
            </h2>
            <button
              onClick={() => {
                setIsVisible(false);
                onClose();
              }}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-700 text-sm mt-2">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
