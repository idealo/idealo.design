import React, { useEffect, useState } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import draftToHtml from 'draftjs-to-html'

import {
    Redirect,
    Link,
    useParams,
    useHistory
} from 'react-router-dom'

import s from './Blogpage.module.scss'

import { fetchSinglePost } from './data'

function toDateFormat_de(inp) {
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
        return 'Loading...'
    }

    const handlePostEdit = () => {
        history.push({
            pathname: `/blog/${slug}/edit`,
            search: `?slug=${slug}`
        });
    }

    const goBack = () => {
        history.push({
            pathname: `/blog/`,
        });
    }

    let facebookLink
    let instagramLink
    let twitterLink
    let emailLink
    let githubLink
    if(blogpost.facebook !== null){
        facebookLink = <a href={blogpost.facebook}><img alt="" src="https://img.icons8.com/dusk/64/000000/facebook.png"/></a>
    }
    if(blogpost.instagram !== null){
        instagramLink = <a href={blogpost.instagram}><img alt="" src="https://img.icons8.com/doodle/48/000000/instagram-new.png"/></a>
    }
    if(blogpost.twitter !== null){
        twitterLink = <a href={blogpost.twitter}><img alt="" src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"/></a>
    }

    if(blogpost.email !== null){
        emailLink = <a href={blogpost.email}><img alt="" src="https://img.icons8.com/doodle/48/000000/email-sign.png"/></a>
    }

    if(blogpost.github !== null){
        githubLink = <a href={blogpost.github}><img alt="" src="https://maxcdn.icons8.com/Share/icon/Logos/github_filled1600.png"/></a>
    }

    const htmlBlogContent = draftToHtml(blogpost.blogpostcontent);

    const HtmlToReactParser = require('html-to-react').Parser;

    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(htmlBlogContent);

    const datetime = toDateFormat_de(blogpost.date)

    return (
        <div className={s.ContentBox}>
            <div className={s.Menu}>
                <button onClick={goBack}>Go Back</button>
                <button onClick={handlePostEdit}>Edit</button>
            </div>

            <div className={s.ContentDetailView}>
                {/*{blogpost.author && (*/}
                <div className={s.SocialMediaIcons}>
                    {instagramLink}
                    {twitterLink}
                    {facebookLink}
                    {emailLink}
                    {githubLink}
                </div>
                <h2>{blogpost.title}</h2>
                <div className={s.Autor}>
                    {blogpost.autor}
                </div>
                <h5>{datetime}</h5>
                {reactElement}
                <img alt="" src={blogpost.image} />
            </div>

            {/* delete button onclick= delete method  */}

            <div className={s.ButtonNavigation}>
                {blogpost.previouspost && (<Link className={s.ButtonPrevious} to={'/blog/' + blogpost.previouspost}>
                    <span>Previous</span>
                </Link>)}
                {blogpost.nextpost && (<Link className={s.ButtonNext} to={'/blog/' + blogpost.nextpost}>
                    <span>Next</span>
                </Link>)}
            </div>
        </div>
    );
};

export default withStyles(s)(BlogDetailView);
