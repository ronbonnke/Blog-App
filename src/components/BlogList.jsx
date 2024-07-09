// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './BlogList.css'; // Import the CSS for BlogList

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => setBlogs(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div className="blogs-page">
//       <h1 className="page-header">List of Blogs</h1>
//       <div className="blogs-container">
//         {blogs.map(blog => (
//           <div key={blog.id} className="blog-card">
//             <Link to={`/blog/${blog.id}`}>
//               <h3>{blog.title}</h3>
//               <p>{blog.body}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogList.css'; // Import the CSS for BlogList

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-header">List of Blogs</h1>
      <div className="blogs-container">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <Link to={`/blog/${blog.id}`}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
