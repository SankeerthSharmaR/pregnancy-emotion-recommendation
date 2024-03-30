import React from "react";

export default function Navbar({ user }) {
  user = {
    name: "Alex Johnson",
    profilePic: "https://via.placeholder.com/150", // Placeholder image URL
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
        <div className="container flex items-center justify-between px-6 mx-auto py-4">
          <a
            className="text-2xl font-bold tracking-tighter text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
            href="/"
          >
            PregPal
          </a>

          {user && (
            <div className="flex items-center space-x-3">
              <img
                className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                src={user.profilePic || ""}
                alt="User profile"
              />
              <span className="text-gray-800 text-sm">
                {user.name || "User"}
              </span>
            </div>
          )}
        </div>
        <div className="h-px bg-gradient-to-r from-blue-500 to-blue-800 opacity-70"></div>
      </nav>
    </>
  );
}
