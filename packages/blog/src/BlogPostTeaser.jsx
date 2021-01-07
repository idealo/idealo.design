import './BlogPostTeaser.css';
import { fetchList, fetchPostByCategorySlug } from './Data';
import { Link, useParams } from "react-router-dom";



function BlogPostTeaser(){
    const { slug } = useParams();

    let blogData;
    if (slug) {
        blogData = fetchPostByCategorySlug({ categorySlug:slug })
    } else {
        blogData = fetchList();
    }

  return blogData.map((blog) => {
    return (
      <div key={blog.id} className="Content">
        <h2>
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
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
