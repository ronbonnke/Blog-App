import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import Home from "./components/Home";
import Layout from "./components/Layout";
import SearchResults from "./components/SearchResults"; // Import SearchResults
import "./App.css";

const App = () => {
  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
    // Implement search logic here
  };

  return (
    <div className="container">
      <Router>
        <Layout onSearch={handleSearch}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/search" element={<SearchResults />} />{" "}
            {/* Add SearchResults route */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
