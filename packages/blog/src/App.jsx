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
import {fetchList, fetchSinglePost, fetchPostByCategory, fetchAllCategories} from "./blogData";


function Home() {
    return <h1>Home</h1>
}


function CategoryList() {
    const cats = fetchAllCategories();
    return (
        <ul>
        {cats.map((category) => (
            <li>
                <div key={category.slug}>
                    <Link to={`/blog/category/${category.slug}`}>{category.displayValue}</Link>
                </div>
            </li>))}
        </ul>)
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
                                <CategoryList/>
                        </li>
                    </ul>
                </div>

                <main className="content">
                    <Switch>
                        <Route path="/blog/category/:slug">
                            <div className="BlogPostTeaserList">
                                <BlogPostTeaser/>
                            </div>
                        </Route>
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
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;



