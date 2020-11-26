import './App.css';
import BlogPostTeaser from "./BlogPostTeaser";
import BlogDetailView from "./BlogDetailView";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return <h1>Home</h1>
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
                        </li>
                    </ul>
                </div>

                <main className="content">
                    <Switch>
                        <Route path="/blog/:id">
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



