import React, { useState } from "react";

/**
 * ProfilePage Component
 * Displays a profile page with static image URLs.
 */
const ProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Static image URLs for space and anime
  const imageUrls = [
    "https://png.pngtree.com/element_our/sm/20180616/sm_5b24bccfc6eb6.jpg", 
    "https://i.pinimg.com/736x/60/63/da/6063da107454d50c1d7786cc2c2bac75.jpg", 
    "https://i.pinimg.com/736x/6a/2e/ce/6a2ece8605ac2c1392bbd3b70f13cc98.jpg", 
    "https://i.pinimg.com/736x/49/93/b9/4993b94f481c1dc35eec3306057d3811.jpg", 
    "https://i.pinimg.com/736x/a8/b2/66/a8b266f799a09537a6ca06c2ebb09cbf.jpg", 
    "https://i.pinimg.com/736x/60/b4/c0/60b4c045ee7d96d2ecae47a6e9b12982.jpg", 
    "https://i.pinimg.com/736x/00/55/b9/0055b998aa8d38ea78bcf5a419ecba02.jpg", 
    "https://i.pinimg.com/474x/e8/66/69/e86669962824d1fea733ef3892a9989f.jpg", 
    "https://i.pinimg.com/474x/0b/6e/40/0b6e4079a621b67d659cf4336376d7dc.jpg", 
  ];

  const toggleFollow = () => setIsFollowing(!isFollowing);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold">AshutoshPandey</h1>
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          onClick={toggleTheme}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Profile Info */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pinimg.com/474x/f0/d3/04/f0d30498a273adc548175453287bc5ab.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">Ashutosh</h2>
            <p>09 posts · 500M followers · 30 following</p>
            <button
              className="px-4 py-2 mt-2 bg-blue-500 text-white rounded"
              onClick={toggleFollow}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Post ${index}`}
            className="w-full aspect-square object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
