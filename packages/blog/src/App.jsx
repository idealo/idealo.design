import './App.css';
import BlogPostTeaser from "./BlogPostTeaser";
import BlogDetailView from "./BlogDetailView";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams, Redirect
} from "react-router-dom";

import {fetchList, fetchSinglePost} from "./blogData";

function Home() {
    return <h1>Home</h1>
}

function CategoryList() {
    const cat = fetchList();
    return cat.map((blog) => {
        return (
            <div key={blog.category.slug}>
                <Link to={`/${blog.category.slug}`}>{blog.category.displayValue}</Link>
            </div>)
    })
}

function App() {

    return (
        <div className="App">
            <div className="Mocked-Header">
                Header
            </div>

            <Router>
                <div className="Mocked-Sidebar">
                    Sidebar
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                            <ul>
                                <Link to={`/${CategoryList.slug}`}>{CategoryList}</Link>
                                <div className="ListOfCategories"></div>
                                <CategoryList/>
                            </ul>
                        </li>
                    </ul>
                </div>

                <main className="content">
                    <Switch>
                        <Route path="/blog/:id">
                            <div className="backButton">
                            <Link to='/blog'>
                            <button>Go Back</button>
                            </Link>
                            </div>
                          <BlogDetailView/>
                        <Route path="/blog/:slug">
                            <BlogDetailView/>
                        </Route>
                        <Route path="/blog">
                            <div className="BlogPostTeaserList">
                                <BlogPostTeaser/>
                            </div>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                     </Route>
                    </Switch>
               

                </main>
            </Router>
        </div>
    );
}

export default App;



