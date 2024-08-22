import React, { useState } from 'react';
import './App.css';
import './script';  // Import script.js if needed in React

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* This is the toggle button for mobile screens */}

      <div className='leftnav'>
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <div className='contact'>
        </div>
       
      </div>
      <div className='topnav'>
          <div className='link'>
            <h1>logo</h1>
          </div>
        </div>

      {/* Sidebar Section */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => alert('Option 1 Clicked')}>Option 1</li>
          <li onClick={() => alert('Option 2 Clicked')}>Option 2</li>
          <li onClick={() => alert('Option 3 Clicked')}>Option 3</li>
          {/* Add more sidebar items */}
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="content-item">

        </div>
        <div className="content-item">Content Block 2</div>
        <div className="content-item">Content Block 3</div>
        {/* Add more content blocks as needed */}
      </div>
    </div>
  );
};

export default App;
