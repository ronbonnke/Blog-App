import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserDetail.css'; // Import the CSS for UserDetail

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      try {
        const [userResponse, postsResponse] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        ]);
        setUser(userResponse.data);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserAndPosts();
  }, [id]);

  return (
    <div className="user-detail-container">
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
