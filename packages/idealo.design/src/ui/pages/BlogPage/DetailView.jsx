import React, { useEffect, useState } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import draftToHtml from '../../../vendor/draftjs-to-html'
import HtmlToReact from 'html-to-react';
import Prompt from './Editor/Prompt';

import {
    Redirect,
    Link,
    useParams,
    useHistory
} from 'react-router-dom'

import s from './Blogpage.module.scss'
import {fetchSinglePost, fetchUserInfo, deleteSinglePost, archiveSinglePost} from './data'

function toDateFormat_de(inp) {
    let date = inp ? new Date(inp) : new Date()

    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = date.getHours()+2;
    const minute = String(date.getMinutes()).padStart(2,'0');

    return `${day}.${month}.${year} um ${hour}:${minute} Uhr`;
}


const BlogDetailView = (props) => {
    const history = useHistory();
    const [ blogpost, setBlogpost ] = useState({author: {}});
    const [ userInfo, setUserInfo ] = useState([]);
    const [prompt] = useState({isPromptOpen: false})
    let { slug } = useParams();

    useEffect(() => {
        let mounted = true;

        if (slug) {
            fetchSinglePost({ slug })
                .then(blogpost => setBlogpost(blogpost))
        }
        fetchUserInfo().then(setUser);

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

    const handleDeletion = () => {
        deleteSinglePost(blogpost).then(r => history.push('/blog'))
    }

    const handlePopup = () => {
        prompt.isPromptOpen = true;
    }

    const handleArchive = () => {
        archiveSinglePost(blogpost).then(r => history.push('/blog'))
    }

    const setUser = (user) => {
        setUserInfo(user);
    }

    const scrollToTop = () => {
        document.body.scrollTop = 0;
    }

    const onModalLeave = () => {
        prompt.isPromptOpen=false
        history.push(`/blog/${slug}`)
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
        emailLink = <a href={'mailto:'+blogpost.email}><img alt="" src="https://img.icons8.com/doodle/48/000000/email-sign.png"/></a>
    }

    if(blogpost.github !== null){
        githubLink = <a href={blogpost.github}><img alt="" src="https://maxcdn.icons8.com/Share/icon/Logos/github_filled1600.png"/></a>
    }

    const htmlBlogContent = draftToHtml(blogpost.blogpostcontent);

    const HtmlToReactParser = HtmlToReact.Parser;

    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(htmlBlogContent);

    const datetime = toDateFormat_de(blogpost.date);

    return (
    <div className={s.ContentBox}>
      <div className={s.Menu}>
        <button onClick={goBack}>Go Back</button>
              {userInfo.status === 'LOGGED_IN'
                  ? <button onClick={handlePopup}>Delete</button> : <div> </div>}
              {userInfo.status === 'LOGGED_IN'
                  ? <button onClick={handlePostEdit}>Edit</button> : <div> </div>}
      </div>

      <div className={s.ContentDetailView}>
          <div className={s.SocialMediaIcons}>
              {instagramLink}
              {twitterLink}
              {facebookLink}
              {emailLink}
              {githubLink}
          </div>
          <h2 className={s.blogpostTitle}>{blogpost.title}</h2>
          <div className={s.Autor}>
              {blogpost.autor}
          </div>
          <h5 className={s.blogpostDate}>{datetime}</h5>
          {reactElement}
          <img alt="" src={blogpost.image} />
      </div>

      <div className={s.ButtonNavigation}>
        {blogpost.previouspost && (<Link onClick={scrollToTop} className={s.ButtonPrevious} to={'/blog/' + blogpost.previouspost}>
                                      <span>Previous</span>
                                    </Link>)}
        {blogpost.nextpost && (<Link onClick={scrollToTop} className={s.ButtonNext} to={'/blog/' + blogpost.nextpost}>
                                  <span>Next</span>
                                </Link>)}
      </div>

      <Prompt
          show = {prompt.isPromptOpen}
          onDelete = {handleDeletion}
          onArchive = {handleArchive}
          onCancel = {onModalLeave}
          message = 'Do you want to delete or archive that post?'
      />
    </div>
);
};

export default withStyles(s)(BlogDetailView);
