import React, { Fragment } from 'react';

import blogposts from '../data/blog-posts';

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PageLayout from '../components/PageLayout'
import MainContent from '../components/MainContent'


const BlogPost = ({ meta, children }) => {
  return (
    <PageLayout>
      <div style={{margin: '6rem 2rem', width: '70%'}}>
        {children}
      </div>
    </PageLayout>
  )
}

export default BlogPost;
