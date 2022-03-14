import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
    return (
        <div className="app">
            <Topbar />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
}

export default App;
