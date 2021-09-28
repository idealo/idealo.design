import React from "react";
import draftToHtml from "../../../vendor/draftjs-to-html";
import HtmlToReact from "html-to-react";
import Prompt from "./Prompt";

import s from "./Blogpage.module.scss";
import {
  archiveSinglePost,
  deleteSinglePost,
  fetchSinglePost,
  fetchUserInfo,
  fetchPrevSlugAndNextSlugById
} from "./data";

import { withRouter } from "react-router";

export class DetailView extends React.Component {
  constructor(props) {
    super(props);
    const { history } = props;

    this.state = {
      history: history,
      userInfo: [],
      blogpost: {},
      slug: null,
      slugPreviouspost: null,
      slugNextpost: null,
      isPromptOpen: false,
    };

    this.handlePostEdit = this.handlePostEdit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.onModalLeave = this.onModalLeave.bind(this);
  }

  async componentDidMount() {
    const slug = this.props.match.params.slug;
    if (slug) {
      this.setState({
        blogpost: await fetchSinglePost({ slug: slug }),
        slug: slug,
      });
    }
    this.setState({
      userInfo: await fetchUserInfo(),
    });

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

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.setState({
        blogpost: await fetchSinglePost({ slug: this.props.match.params.slug }),
        slug: this.props.match.params.slug,
      });
    }
  }

  toDateFormat_de(inp) {
    let date = inp ? new Date(inp) : new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours() + 2;
    const minute = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} um ${hour}:${minute} Uhr`;
  }

  handlePostEdit() {
    this.state.history.push({
      pathname: `/blog/${this.state.slug}/edit`,
      search: `?slug=${this.state.slug}`,
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

  handleDeletion() {
    deleteSinglePost(this.state.blogpost).then(
      this.state.history.push("/blog")
    );
  }

  handleArchive() {
    archiveSinglePost(this.state.blogpost).then(
      this.state.history.push("/blog")
    );
  }

  onModalLeave() {
    this.setState({ isPromptOpen: false });
    this.state.history.push(`/blog/${this.state.slug}`);
  }

  handlePopup() {
    this.setState({ isPromptOpen: true });
  }

  render() {
    const htmlBlogContent = draftToHtml(this.state.blogpost.blogpostcontent);
    const HtmlToReactParser = HtmlToReact.Parser;
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(htmlBlogContent);

    const datetime = this.toDateFormat_de(this.state.blogpost.date);
    return (
      <div className={s.ContentBox}>
        <div className={s.Menu}>
          <button onClick={this.goBack}>Go Back</button>
          {this.state.userInfo.status === "LOGGED_IN" ? (
            <button onClick={this.handlePopup} title="deleteButton">
              Delete
            </button>
          ) : (
            <div/>
          )}
          {this.state.userInfo.status === "LOGGED_IN" ? (
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
          <h5 className={s.blogpostDate}>{datetime}</h5>
          {reactElement}
          <img
            aria-label="blogpostImage"
            alt=""
            src={this.state.blogpost.image}
          />
        </div>

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

        <Prompt
          show={this.state.isPromptOpen}
          onDelete={this.handleDeletion}
          onArchive={this.handleArchive}
          onCancel={this.onModalLeave}
          message="Do you want to delete or archive that post?"
        />
      </div>
    );
  }
}

export default withRouter(DetailView);
