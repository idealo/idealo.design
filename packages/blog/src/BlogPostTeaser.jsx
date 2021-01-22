import React, { useState, useEffect } from 'react';
import './BlogPostTeaser.css';
import {fetchList, fetchPostsByCategorySlug} from './Data';
import {Link, useParams} from "react-router-dom";



function BlogPostTeaser(){
  const [data, setData] = useState({blogPosts:[]});
    const { slug } = useParams();

    useEffect( () => {
      const fetchData = async () => {
        let blogData;
        // if (slug) {
        //  blogData = await fetchPostsByCategorySlug({ categorySlug:slug })
        // } else {
        blogData = await fetchList();
        console.debug(blogData)
        // }
        setData(blogData.data);
      }
      fetchData();
      
    }, []);
   
    console.debug('data:',data)

  return data.blogPosts.map((blog) => {
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
