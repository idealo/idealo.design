import React from 'react'
import ReactModal from 'react-modal'
import draftToHtml from '../../../vendor/draftjs-to-html'
import HtmlToReact from 'html-to-react';
import Prompt from './Editor/Prompt';

import s from './Blogpage.module.scss'
import {fetchSinglePost, fetchUserInfo, deleteSinglePost, archiveSinglePost} from './data'

import {withRouter} from "react-router";

export class DetailView extends React.Component {

    constructor(props) {
        super(props);
        const { history } = props;

        this.state = {
            history: history,
            userInfo :[],
            blogpost: {},
            slug : null,
            isPromptOpen: false,
        }
        this.handlePostEdit = this.handlePostEdit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
        this.onModalLeave = this.onModalLeave.bind(this);
    }

    async componentDidMount() {
        const slug = this.props.match.params.slug
        if (slug) {
            this.setState({
                blogpost : await fetchSinglePost({ slug }),
                slug : slug
            })
        }
        this.setState( {
            userInfo : await fetchUserInfo()
        })
        ReactModal.setAppElement('body');
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            this.setState({
                blogpost : await fetchSinglePost({ slug: this.props.match.params.slug }),
                slug : this.props.match.params.slug
            })
        }
    }

    toDateFormat_de(inp)
    {
        let date = inp ? new Date(inp) : new Date()

        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day = date.getDate();
        const hour = date.getHours()+2;
        const minute = String(date.getMinutes()).padStart(2,'0');

        return `${day}.${month}.${year} um ${hour}:${minute} Uhr`;
    }

    handlePostEdit()
    {
        this.state.history.push({
            pathname: `/blog/${this.state.slug}/edit`,
            search: `?slug=${this.state.slug}`
        });
    }

    scrollToTop() {
        document.body.scrollTop = 0;
    }

    goBack() {
        this.state.history.push({
            pathname: `/blog/`,
        });
    }

    handleDeletion()
    {
        deleteSinglePost(this.state.blogpost).then(r => this.state.history.push('/blog'))
    }

    handleArchive() {
        archiveSinglePost(this.state.blogpost,
            ()=>{
                this.state.history.push('/blog')
            })
    }

    onModalLeave() {
        this.setState({ isPromptOpen: false});
        this.state.history.push(`/blog/${this.state.slug}`)
    }

    handlePopup()
    {
        this.setState({ isPromptOpen: true});
    }

    render() {
        let facebookLink
        let instagramLink
        let twitterLink
        let emailLink
        let githubLink
        if(this.state.blogpost.facebook !== null){
            facebookLink = <a href={this.state.blogpost.facebook}><img alt="" src="https://img.icons8.com/dusk/64/000000/facebook.png"/></a>
        }
        if(this.state.blogpost.instagram !== null){
            instagramLink = <a href={this.state.blogpost.instagram}><img alt="" src="https://img.icons8.com/doodle/48/000000/instagram-new.png"/></a>
        }
        if(this.state.blogpost.twitter !== null){
            twitterLink = <a href={this.state.blogpost.twitter}><img alt="" src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"/></a>
        }

        if(this.state.blogpost.email !== null){
            emailLink = <a href={'mailto:'+this.state.blogpost.email}><img alt="" src="https://img.icons8.com/doodle/48/000000/email-sign.png"/></a>
        }

        if(this.state.blogpost.github !== null){
            githubLink = <a href={this.state.blogpost.github}><img alt="" src="https://maxcdn.icons8.com/Share/icon/Logos/github_filled1600.png"/></a>
        }

        const htmlBlogContent = draftToHtml(this.state.blogpost.blogpostcontent);
        const HtmlToReactParser = HtmlToReact.Parser;
        const htmlToReactParser = new HtmlToReactParser();
        const reactElement = htmlToReactParser.parse(htmlBlogContent);

        const datetime = this.toDateFormat_de(this.state.blogpost.date);
    return (
    <div className={s.ContentBox}>
      <div className={s.Menu}>
        <button onClick={this.goBack}>Go Back</button>
              {this.state.userInfo.status === 'LOGGED_IN'
                  ? <button onClick={this.handlePopup} title='deleteButton'>Delete</button> : <div> </div>}
              {this.state.userInfo.status === 'LOGGED_IN'
                  ? <button onClick={this.handlePostEdit} title='editButton'>Edit</button> : <div> </div>}
      </div>

      <div className={s.ContentDetailView}>
          <div className={s.SocialMediaIcons}>
              {instagramLink}
              {twitterLink}
              {facebookLink}
              {emailLink}
              {githubLink}
          </div>
          <h2 className={s.blogpostTitle}>{this.state.blogpost.title}</h2>
          <div className={s.Autor}>
              {this.state.blogpost.autor}
          </div>
          <h5 className={s.blogpostDate}>{datetime}</h5>
          {reactElement}
          <img aria-label='blogpostImage' alt="" src={this.state.blogpost.image} />
      </div>

      <div className={s.ButtonNavigation}>
          {this.state.blogpost.previouspost && (<a href={`/blog/${this.state.blogpost.previouspost}`} onClick={this.scrollToTop} className={s.ButtonPrevious}>
              <span>Previous</span>
          </a>)}
          {this.state.blogpost.nextpost && (<a href={`/blog/${this.state.blogpost.nextpost}`} onClick={this.scrollToTop} className={s.ButtonNext}>
              <span>Next</span>
          </a>)}
      </div>

      <Prompt
          show = {this.state.isPromptOpen}
          onDelete = {this.handleDeletion}
          onArchive = {this.handleArchive}
          onCancel = {this.onModalLeave}
          message = 'Do you want to delete or archive that post?'
      />
    </div>
    );
    }
}

export default withRouter(DetailView);

