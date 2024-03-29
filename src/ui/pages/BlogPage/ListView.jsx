import React from "react";

import {fetchAllBlogposts, fetchPostsByCategorySlug, fetchUserInfo} from "./data";
import s from "./Blogpage.module.scss";
import draftToHtml from "../../../vendor/draftjs-to-html";
import {htmlToText} from "html-to-text";
import {withRouter} from "react-router";

export class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogposts: null,
        }
    }

    async componentDidMount() {
        const blogposts = await fetchAllBlogposts()
        if (blogposts){
            this.setState({
                blogposts: blogposts,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.blogposts ? <ListedBlogposts {...this.props}/> : <h1>Loading...</h1>}
            </div>
        );
    }
}

class ListedBlogposts extends React.Component {
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
                    list: await fetchAllBlogposts(),
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
                <h1 className={s.headline}>BlogPage</h1>
                {this.state.userInfo.status === "LOGGED_IN" ? (
                    <button
                        className={s.NewPostButton}
                        onClick={this.handleNewPost}
                        title="newPostButton"
                    >New Post</button>
                ) : (
                    <div/>
                )}

                <div style={{clear: "both"}}/>

                <div className={s.container}>
                    {this.state.list.map((blogpost) => (

                        <div className={s.item} key={blogpost.id}>
                            <a className={s.LinkToDetailView} href={`/blog/${blogpost.slug}`}>
                                <div>
                                    <img className={s.imageListView} title="blogpostPreview" alt="" src={blogpost.image}/>
                                </div>
                                <div className={s.contentListView}>
                                    <h5 className={s.categoryListView}>{blogpost.categorydisplayvalue}</h5>
                                    <h2 className={s.titleListView} title="blogpostTitle">{blogpost.title}</h2>
                                    <p className={s.textListView}>{this.getReactElement(blogpost.blogpostcontent)}</p>
                                    <hr/>
                                    <h5 className={s.authorListView}>by {blogpost.autor}</h5>
                                    <h5 className={s.dateListView}>{this.toDateFormat_de(blogpost.date)}</h5>
                                </div>
                            </a>
                        </div>

                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ListView);
