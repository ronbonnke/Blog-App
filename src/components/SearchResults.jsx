import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './SearchResults.css'; // Import the CSS for highlighting

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (query) {
      // Fetch blogs and users from the API
      const fetchResults = async () => {
        try {
          const [blogsResponse, usersResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
          ]);

          const blogs = blogsResponse.data.filter(blog => 
            blog.title.toLowerCase().startsWith(query.toLowerCase()) || 
            blog.body.toLowerCase().startsWith(query.toLowerCase())
          );
          const users = usersResponse.data.filter(user => 
            user.name.toLowerCase().startsWith(query.toLowerCase()) || 
            user.username.toLowerCase().startsWith(query.toLowerCase()) || 
            user.email.toLowerCase().startsWith(query.toLowerCase())
          );

          if (blogs.length > 0 || users.length > 0) {
            setResults([...blogs, ...users]);
            setNotFound(false);
          } else {
            setNotFound(true);
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
          setNotFound(true);
        }
      };

      fetchResults();
    }
  }, [query]);

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`\\b${highlight}`, 'gi');
    const parts = text.split(regex);
    const matches = text.match(regex);
    
    return parts.reduce((acc, part, i) => 
      matches && matches[i] ? [...acc, part, <span key={i} className="highlight">{matches[i]}</span>] : [...acc, part], []
    );
  };

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {notFound ? (
        <p>No results found</p>
      ) : (
        <div className="results-container">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              {result.title ? (
                <div>
                  <strong>Blog:</strong> {highlightText(result.title, query)}<br />
                  {highlightText(result.body, query)}
                </div>
              ) : (
                <div>
                  <strong>User:</strong> {highlightText(result.name, query)}<br />
                  Username: {highlightText(result.username, query)}<br />
                  Email: {highlightText(result.email, query)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
