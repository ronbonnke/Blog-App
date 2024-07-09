import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Welcome to Blogs Application</h1>
        <Link to="/blogs" className="home-link">View List of Blogs</Link>
        <Link to="/users" className="home-link">View List of Users</Link>
      </div>
    </div>
  );
};

export default Home;
