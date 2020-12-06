import './BlogDetailView.css';
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { fetchSinglePost } from './Data';

const BlogDetailView = (props) => {
    let { slug } = useParams();

    const blogpost = fetchSinglePost({ slug });

    if (!blogpost) {
        return <Redirect to="/404"/>
    }

    const date = new Date(blogpost.date);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    let facebookLink
    if(blogpost.author.facebook !== ""){
        facebookLink = <a href={blogpost.author.facebook}><img alt="" src="https://img.icons8.com/dusk/64/000000/facebook.png"/></a>
    }
    let instagramLink
    if(blogpost.author.facebook !== ""){
        instagramLink = <a href={blogpost.author.instagram}><img alt="" src="https://img.icons8.com/doodle/48/000000/instagram-new.png"/></a>
    }
    let twitterLink
    if(blogpost.author.twitter !== ""){
        twitterLink = <a href={blogpost.author.twitter}><img alt="" src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"/></a>
    }

    let emailLink
    if(blogpost.author.email !== ""){
        emailLink = <a href={blogpost.author.email}><img alt="" src="https://img.icons8.com/doodle/48/000000/email-sign.png"/></a>
    }


    return (
        <>
            <div className="ContentBox">
                <div className="socialMediaIcons">
                    {instagramLink}
                    {twitterLink}
                    {facebookLink}
                    {emailLink}
                </div>
                <h2>{blogpost.title}</h2>
                <h4>{`${day}.${month}.${year} um ${hour}:${minute} Uhr`}</h4>
                <h4>{blogpost.author.name}</h4>
                <p>{blogpost.text}</p>
                <img alt="" src={blogpost.image} />
            </div>

            <div className="ButtonNavigation">
                <button className="ButtonPrevious">Previous</button>
                <button className="ButtonNext">Next</button>
            </div>
        </>
    );
};

export default BlogDetailView;