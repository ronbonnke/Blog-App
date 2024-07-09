import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
      onSearch(searchTerm);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Blog App</Link>
      </div>
      <div className="navbar-right">
        <Link to="/blogs">Blogs</Link>
        <Link to="/users">Users</Link>
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
