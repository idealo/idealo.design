import './BlogPostTeaser.css';
import { fetchList } from './blogData';

import { Link } from "react-router-dom";



function BlogPostTeaser(){
  const blogData = fetchList()

  return blogData.map((blog) => {
    return (
      <div key={blog.id} className="Content">
        <h2>
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </h2>
        <img alt="" src={blog.image}/>
        <p>
          {blog.text}
        </p>
      </div>
    )
  })
}


export default BlogPostTeaser;
