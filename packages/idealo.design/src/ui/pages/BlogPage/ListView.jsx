import React, { useState, useEffect } from 'react';

import withStyles from 'isomorphic-style-loader/withStyles'

import {fetchList, fetchPostsByCategorySlug, fetchUserInfo} from './data';
import { Link, useParams, useHistory } from "react-router-dom";

import s from './Blogpage.module.scss';
import draftToHtml from '../../../vendor/draftjs-to-html';
import {htmlToText} from 'html-to-text';

function ListView() {
  const history = useHistory();
  const [ list, setList ] = useState([]);
  const [ userInfo, setUserInfo ] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    let mounted = true;

    const setData = (list) => {
      if (mounted) {
        setList(list);
      }
    }

    const setUser = (user) => {
      if (mounted) {
        setUserInfo(user);
      }
    }

    if (slug) {
      fetchPostsByCategorySlug({ categorySlug: slug })
        .then(setData);
    } else {
      fetchList()
        .then(setData);
    }
    fetchUserInfo().then(setUser);

    return () => mounted = false;
  }, [slug]);

  const handleNewPost = () => {
    history.push({
      pathname: `/blog/new-post`,
    });
  }

  // const highlighted = list.pop()
  function getReactElement(a){
    const htmlBlogContent = draftToHtml(a);
    const plainText = htmlBlogContent.replace(/<[^>]*>/g, '');
    return htmlToText(plainText);
  }

  return (
    <>
      {userInfo.status === 'LOGGED_IN'
          ? <button style={{
                float: 'right',
                marginBottom: '1rem',
                marginRight: '1rem',
                backgroundColor: '#395F86',
                border: 'none',
                color: 'white',
                padding: '10px 30px',
                textAlign: 'center',
                fontSize: '14px',
              }} onClick={handleNewPost}>New Post</button>
          : <div> </div>}

      <div style={{ clear: 'both' }}/>
    

      <div className={s.List}>
        {list.map((blogpost) => (
          <div key={blogpost.id} className={s.Content}>
            <h2 className={s.blogpostTitle}>
              <Link to={`/blog/${blogpost.slug}`}>{blogpost.title}</Link>
            </h2>
            <img alt="" src={blogpost.image}/>
              {getReactElement(blogpost.blogpostcontent)}
          </div>
        ))}
      </div>
    </>
  )
}


export default withStyles(s)(ListView);
