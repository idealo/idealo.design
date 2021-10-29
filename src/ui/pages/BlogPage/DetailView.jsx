import React from "react";
import draftToHtml from "../../../vendor/draftjs-to-html";
import HtmlToReact from "html-to-react";
import Prompt from "../../components/Prompt";

import s from "./Blogpage.module.scss";
import {
  archiveSinglePost,
  deleteSinglePost,
  fetchPrevSlugAndNextSlugById,
  fetchSinglePost,
  fetchUserInfo
} from "./data";

import {withRouter, Redirect} from "react-router";

export class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogpost: null,
      error: null,
    }
  }

  async componentDidMount() {
    const blogpost = await fetchSinglePost({slug: this.props.match.params.slug})

    if(blogpost){
      this.setState({
        blogpost: blogpost,
      });
    }else{
      this.setState({
        error: '404',
      })
    }
  }

  render() {
    if(this.state.blogpost){
      return <Blogpost {...this.props}/>
    }else if(this.state.error){
      return <Redirect to="/error"/>
    }else{
      return <h2>Loading...</h2>
    }
  }
}

class Blogpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      blogpost: {},
      slug: null,
      slugPreviouspost: null,
      slugNextpost: null,
      isPromptOpen: false,
    }

    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handlePostEdit = this.handlePostEdit.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
    this.onModalLeave = this.onModalLeave.bind(this);
    this.convertToHtml = this.convertToHtml.bind(this);
    this.convertDatetime = this.convertDatetime.bind(this);
    this.goBack = this.goBack.bind(this);

  }

  async componentDidMount() {
    this.setState({
      userInfo: await fetchUserInfo(),
    });
    const slug = this.props.match.params.slug;
    if (slug) {
      this.setState({
        blogpost: await fetchSinglePost({ slug: slug }),
        slug: slug,
      });
      if(this.state.blogpost){
        const slugsPreviousAndNextPost = await fetchPrevSlugAndNextSlugById({id: this.state.blogpost.id })
        if(slugsPreviousAndNextPost[0]!==null){
          this.setState({
            slugPreviouspost: slugsPreviousAndNextPost[0].slug,
          })
        }
        if(slugsPreviousAndNextPost[1]!==null){
          this.setState({
            slugNextpost: slugsPreviousAndNextPost[1].slug,
          })
        }
      }
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({
        blogpost: await fetchSinglePost({ slug: this.props.match.params.slug }),
      });
    }
  }

  goBack() {
    this.props.history.push({
      pathname: `/blog`,
    });
  }

  toDateFormat_de(inp) {
    if(inp){
      let date = inp ? new Date(inp) : new Date();

      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = String(date.getMinutes()).padStart(2, "0");

      return `${day}.${month}.${year} um ${hour}:${minute} Uhr`;
    }
  }

  handlePostEdit() {
    this.props.history.push({
      pathname: `/blog/${this.state.slug}/edit`,
      search: `?slug=${this.state.slug}`,
    });
  }

  scrollToTop() {
    document.body.scrollTop = 0;
  }

  onModalLeave() {
    this.setState({ isPromptOpen: false });
    this.props.history.push(`/blog/${this.state.blogpost.slug}`);
  }

  handlePopup() {
    this.setState({ isPromptOpen: true });
  }

  convertToHtml(content){
    const htmlBlogContent = draftToHtml(content);
    const HtmlToReactParser = HtmlToReact.Parser;
    const htmlToReactParser = new HtmlToReactParser();
    return htmlToReactParser.parse(htmlBlogContent)
  }

  convertDatetime(date){
    return this.toDateFormat_de(date);
  }

  handleDeletion() {
    deleteSinglePost(this.state.blogpost).then(
        this.props.history.push("/blog")
    );
  }

  handleArchive() {
    archiveSinglePost(this.state.blogpost).then(
        this.props.history.push("/blog")
    );
  }

  render() {
    return (
        <div className={s.ContentBox}>
          <div className={s.Menu}>
            <button onClick={this.goBack}>Go Back</button>
            {this.state.userInfo.status === "LOGGED_IN" && this.state.blogpost ? (
                  <button onClick={this.handlePopup} title="deleteButton">
                    Delete
                  </button>
              ) : (
                  <div/>
              )}
              {this.state.userInfo.status === "LOGGED_IN" && this.state.blogpost ? (
                  <button onClick={this.handlePostEdit} title="editButton">
                    Edit
                  </button>
              ) : (
                  <div/>
              )}
            </div>

            <div className={s.ContentDetailView}>
                    <h2 className={s.blogpostTitle}>{this.state.blogpost.title}</h2>
                    <div className={s.Autor}>{this.state.blogpost.autor}</div>
                    <h5 className={s.blogpostDate}>{this.convertDatetime(this.state.blogpost.date)}</h5>
                    {this.convertToHtml(this.state.blogpost.blogpostcontent)}
                    <img
                        aria-label="blogpostImage"
                        alt=""
                        src={this.state.blogpost.image}
                    />

                    <div className={s.ButtonNavigation}>
                      {this.state.blogpost.previouspost && (
                          <a
                              title="prevPost"
                              href={`/blog/${this.state.slugPreviouspost}`}
                              onClick={this.scrollToTop}
                          >
                            <button className={s.ButtonPrevious}>Previous</button>
                          </a>
                      )}
                      {this.state.blogpost.nextpost && (
                          <a
                              title="nextPost"
                              href={`/blog/${this.state.slugNextpost}`}
                              onClick={this.scrollToTop}
                              className={s.ButtonNext}
                          >
                            <button className={s.ButtonNextOnHover}>Next</button>
                          </a>
                      )}
                    </div>
                  </div>

            <Prompt
                show={this.state.isPromptOpen}
                onDelete={this.handleDeletion}
                onArchive={this.handleArchive}
                onCancel={this.onModalLeave}
                message="Do you want to delete or archive that post?"
            />
          </div>
    )
  }
}

export default withRouter(DetailView)