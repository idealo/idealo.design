import './App.css';
import BlogPostTeaser from "./BlogPostTeaser";

function App() {
    return (
        <div className="App">
            <div className="Mocked-Header">
                Header
            </div>
            <div className="Mocked-Sidebar">
                Sidebar
            </div>
            <main className="content">
                <h1>Blogs</h1>
                <div className="BlogPostTeaserList">
                    <BlogPostTeaser/>
                </div>
            </main>
        </div>
    );
}

export default App;


