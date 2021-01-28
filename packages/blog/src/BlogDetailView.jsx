import React, { useEffect, useState } from "react";
import { Redirect, Link, useParams, useHistory } from "react-router-dom";
import './BlogDetailView.css';

import { fetchSinglePost } from './Data';

function toDateFormat_de(inp) {
  console.log('toDateFormate_de inp', inp)
  let date = inp ? new Date(inp) : new Date()

  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${day}.${month}.${year} um ${hour}:${minute} Uhr`;
}


const BlogDetailView = (props) => {
  const history = useHistory();
  const [ blogpost, setBlogpost ] = useState({author: {}});
  let { slug } = useParams();

  useEffect(() => {
    let mounted = true;

    if (slug) {
      fetchSinglePost({ slug })
        .then(blogpost => setBlogpost(blogpost))
    }


    return () => mounted = false;
  }, [slug]);

  if (!blogpost) {
    // return <Redirect to="/404"/>
    return 'Loading...'
  }

  const handlePostEdit = () => {
    history.push({
      pathname: "/newblogpost",
      search: `?slug=${slug}`
    });
  }

  let facebookLink
  let instagramLink
  let twitterLink
  let emailLink
  if (blogpost.author) {
    if(blogpost.author.facebook !== ""){
      facebookLink = <a href={blogpost.author.facebook}><img alt="" src="https://img.icons8.com/dusk/64/000000/facebook.png"/></a>
    }
    if(blogpost.author.facebook !== ""){
      instagramLink = <a href={blogpost.author.instagram}><img alt="" src="https://img.icons8.com/doodle/48/000000/instagram-new.png"/></a>
    }
    if(blogpost.author.twitter !== ""){
      twitterLink = <a href={blogpost.author.twitter}><img alt="" src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"/></a>
    }

    if(blogpost.author.email !== ""){
      emailLink = <a href={blogpost.author.email}><img alt="" src="https://img.icons8.com/doodle/48/000000/email-sign.png"/></a>
    }
  }

  const datetime = toDateFormat_de(blogpost.date)

  return (
    <>
      <div className="ContentBox">
        {blogpost.author && (
          <div className="socialMediaIcons">
            {instagramLink}
            {twitterLink}
            {facebookLink}
            {emailLink}
          </div>)}
        <h2>{blogpost.title}</h2>
        <h4>{datetime}</h4>
        {blogpost.author && (<h4>{blogpost.author.name}</h4>)}
        <p>{blogpost.text}</p>
        <img alt="" src={blogpost.image} />
        <button onClick={handlePostEdit}>Edit</button>
      </div>

      <div className="ButtonNavigation">
        {blogpost.previousPost && (<Link to={'/blog/' + blogpost.previousPost}>
                                     <span className="ButtonPrevious">Previous</span>
                                   </Link>)}
        {blogpost.nextPost && (<Link to={'/blog/' + blogpost.nextPost}>
                                 <span className="ButtonNext">Next</span>
                               </Link>)}
      </div>
    </>
  );
};

export default BlogDetailView;
