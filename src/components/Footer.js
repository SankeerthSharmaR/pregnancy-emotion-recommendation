import React from "react";

export default function Footer() {
  // Replace with actual LinkedIn URLs
  const yashLinkedIn = "https://www.linkedin.com/in/yash-javiya";
  const sakeerthLinkedIn = "https://www.linkedin.com/in/sakeerth-rani";

  return (
    <>
      <footer className="fixed bottom-0 w-full z-50 bg-white/20 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <a
              href="https://web.cs.dal.ca/~orji/index.html"
              className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Persuasive Computing Lab, Dalhousie University
            </a>
            <div className="text-gray-600 text-sm mt-2 md:mt-0 md:ml-4">
              Developed by
              <a
                href={yashLinkedIn}
                className="hover:text-blue-500 transition duration-300 ease-in-out ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yash Javiya
              </a>{" "}
              and
              <a
                href={sakeerthLinkedIn}
                className="hover:text-blue-500 transition duration-300 ease-in-out ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sakeerth Rani
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
