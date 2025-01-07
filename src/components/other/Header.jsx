import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', ''); // Clear localStorage
    props.changeUser(''); // Reset username in parent state
  };

  // Check if data exists and extract the username
  const username = props.data?.firstName || 'Arunabh'; // Fallback to 'Admin' if data or firstName is unavailable

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{' '}
        <span className="text-3xl font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 rounded-lg text-lg font-medium text-white px-5 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
