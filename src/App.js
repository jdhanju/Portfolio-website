import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Experience from './experience';
import Home from './Home';
import Navbar from './Components/Navbar';
import About from './About'
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Experience" element={<Experience />} />
            <Route exact path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
