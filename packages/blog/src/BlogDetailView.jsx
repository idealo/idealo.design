import './BlogDetailView.css';
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { fetchSinglePost } from './blogData';

const BlogDetailView = (props) => {
  let { id } = useParams();
  const blogpost = fetchSinglePost({id})
  if (!blogpost) {
    console.log("not a valid ID")
    return <Redirect to="/404"/>
  }

  return (
    <div className="ContentBox">
      <div className="socialMediaIcons">
        <img alt="" src="https://img.icons8.com/doodle/48/000000/instagram-new.png"/>
        <img alt="" src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"/>
        <img alt="" src="https://img.icons8.com/dusk/64/000000/facebook.png"/>
        <img alt="" src="https://img.icons8.com/doodle/48/000000/email-sign.png"/>
      </div>
      <h2>{blogpost.title}</h2>
      <h4>{blogpost.date}</h4>
      <h4>{blogpost.author}</h4>
      <p>{blogpost.text}</p>
      <img alt="" src={blogpost.image} />
    </div>
  );
}

export default BlogDetailView;
