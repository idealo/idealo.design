import React, { Fragment } from 'react';

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
