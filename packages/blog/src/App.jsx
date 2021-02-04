import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import BlogPostTeaser from "./BlogPostTeaser";
import BlogDetailView from "./BlogDetailView";
import RichTextEditor from "./components/RichTextEditor"
import { fetchAllCategories } from "./Data";

import './App.css';

function Home() {
  return <h1>Home</h1>
}

function CategoryList() {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    fetchAllCategories().then(cats => setCategories(cats));
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.categoryslug}>
          <div>
            {/* <Link to={`/blog/category/${category.categoryslug}`}>{category.displayValue}</Link> */}
            <Link to={`/blog/category/${category.categoryslug}`}>{category.categoryslug} ({category.sum})</Link>
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

            <Route component={RichTextEditor} path="/newblogpost" />

            <Route path="/blog/:slug">
              <div className="backButton">
                <Link to='/blog'>
                  <button>Go Back</button>
                </Link>
              </div>
              <BlogDetailView/>
            </Route>

            <Route path="/blog">
              <div className="newPostButton">
                <Link to='/newblogpost'>
                  <button>New Post</button>
                </Link>
              </div>
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
