import './App.css';
import BoxComponent from "./BoxComponent";

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
         <h1> "Blog Listing" </h1>
            <BoxComponent></BoxComponent>
        </main>
    {/*<img src={logo} className="App-logo" alt="logo" />*/}
    </div>
  );
}

export default App;


