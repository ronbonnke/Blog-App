import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css'; // Import the CSS for BlogDetail

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBlogAndComments = async () => {
      try {
        const [blogResponse, commentsResponse] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
          axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        ]);
        setBlog(blogResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching blog and comments:', error);
      }
    };

    fetchBlogAndComments();
  }, [id]);

  return (
    <div className="blog-detail-container">
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
        <p>By <Link to={`/user/${blog.userId}`}>User {blog.userId}</Link></p>
      </div>
      
      <div className="comments-container">
        <h2>Comments</h2>
        <ul className="comments-list">
          {comments.map(comment => (
            <li key={comment.id} className="comment-item">
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
