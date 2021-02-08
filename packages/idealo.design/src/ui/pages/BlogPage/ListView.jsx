import React, { useState, useEffect } from 'react';

import withStyles from 'isomorphic-style-loader/withStyles'

import { fetchList, fetchPostsByCategorySlug } from './data';
import { Link, useParams, useHistory } from "react-router-dom";



import s from './Blogpage.module.scss';

function ListView() {
  const history = useHistory();
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

  const handleNewPost = () => {
    history.push({
      pathname: `/blog/new-post`,
    });
  }

  const highlighted = list.pop()

  return (
    <>
      <button style={{
        float: 'right',
        marginBottom: '1rem',
      }} onClick={handleNewPost}>New Post</button>

      <div style={{ clear: 'both' }}/>

      {highlighted && (
        <div>
          <div className={s.HighlightedTeaser}>
            <h2>
              <Link to={`/blog/${highlighted.slug}`}>{highlighted.title}</Link>
            </h2>
            <img alt="" src={highlighted.image}/>
            <p>
              {highlighted.text}
            </p>
          </div>
        </div>)}

      <div className={s.List}>
        {list.map((blogpost) => (
          <div key={blogpost.id} className={s.Content}>
            <h2>
              <Link to={`/blog/${blogpost.slug}`}>{blogpost.title}</Link>
            </h2>
            <img alt="" src={blogpost.image}/>
            <p>
              {blogpost.text}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}


export default withStyles(s)(ListView);
