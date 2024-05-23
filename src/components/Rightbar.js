import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar (You can customize this as needed) */}
      <div className="bg-gray-800 text-white w-1/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Left Sidebar</h2>
        {/* Add your left sidebar content here */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {/* Main content of the dashboard */}
        {/* You can add your charts, widgets, etc., here */}

        {/* Notice Board on the Right */}
        <div className="bg-gray-200 p-4 ml-auto w-1/4">
          <h2 className="text-xl font-bold mb-4">Notice Board</h2>
          {/* Add your notice board content here */}
          <ul>
            <li>Notice 1</li>
            <li>Notice 2</li>
            <li>Notice 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
