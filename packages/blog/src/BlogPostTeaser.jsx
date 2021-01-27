import React, { useState, useEffect } from 'react';
import './BlogPostTeaser.css';
import {fetchList, fetchPostsByCategorySlug} from './Data';
import {Link, useParams} from "react-router-dom";


function BlogPostTeaser() {
  const [ list, setList ] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    let mounted = true;

    const setData = (list) => {
      if (mounted) {
        setList(list);
      }
    }

    if (slug) {
      fetchPostsByCategorySlug({ categorySlug: slug })
        .then(setData);
    } else {
      fetchList()
        .then(setData);
    }

    return () => mounted = false;
  }, [slug]);

  return list.map((blogpost) => {
    return (
      <div key={blogpost.id} className="Content">
        <h2>
          <Link to={`/blog/${blogpost.slug}`}>{blogpost.title}</Link>
        </h2>
        <img alt="" src={blogpost.image}/>
        <p>
          {blogpost.text}
        </p>
      </div>
    )
  })
}


export default BlogPostTeaser;
