import React from "react";

import {fetchList, fetchPostsByCategorySlug, fetchUserInfo} from "./data";
import s from "./Blogpage.module.scss";
import draftToHtml from "../../../vendor/draftjs-to-html";
import {htmlToText} from "html-to-text";
import {withRouter} from "react-router";

export class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            list: [],
        };
        this.handleNewPost = this.handleNewPost.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getReactElement = this.getReactElement.bind(this);
        this.toDateFormat_de = this.toDateFormat_de.bind(this);
    }

    async componentDidMount() {
        this.setState({
            userInfo: await fetchUserInfo(),
        });
        await this.updateListView();
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            await this.updateListView();
        }
    }

    async updateListView() {
        try {
            const slug = this.props.match.params.slug;
            if (slug) {
                this.setState({
                    list: await fetchPostsByCategorySlug({categorySlug: slug}),
                });
            } else {
                this.setState({
                    list: await fetchList(),
                });
            }
        } catch (error) {
        }
    }

    toDateFormat_de(inp) {
        let date = inp ? new Date(inp) : new Date();

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${day}.${month}.${year}`;
    }

    handleNewPost() {
        this.props.history.push("/blog/new-post");
    }

    getReactElement(a) {
        const htmlBlogContent = draftToHtml(a);
        const plainText = htmlBlogContent.replace(/<[^>]*>/g, "");
        return htmlToText(plainText);
    }

  render() {
    return (
      <div>
        {this.state.userInfo.status === "LOGGED_IN" ? (
          <button
            style={{
              float: "right",
              marginBottom: "1rem",
              marginRight: "1rem",
              backgroundColor: "#0A3761",
              border: "none",
              color: "white",
              padding: "10px 30px",
              textAlign: "center",
              fontSize: "14px",
            }}
            onClick={this.handleNewPost}
            title="newPostButton"
          >
            New Post
          </button>
        ) : (
          <div></div>
        )}

                <div style={{clear: "both"}}/>

                <div className={s.container}>
                    {this.state.list.map((blogpost) => (
                        <div className={s.item} key={blogpost.id}>
                            <div>
                                <img className={s.imageListView} title="blogpostPreview" alt="" src={blogpost.image}/>
                            </div>
                            <div className={s.contentListView}>
                                <h5 className={s.categoryListView}>{blogpost.categorydisplayvalue}</h5>
                                <h2 className={s.titleListView} title="blogpostTitle">
                                    <a className={s.LinkToDetailView}
                                       href={`/blog/${blogpost.slug}`}>{blogpost.title}</a>
                                </h2>
                                <p className={s.textListView}>{this.getReactElement(blogpost.blogpostcontent)}</p>
                                <hr></hr>
                                <h5 className={s.authorListView}>by {blogpost.autor}</h5>
                                <h5 className={s.dateListView}>{this.toDateFormat_de(blogpost.date)}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ListView);
