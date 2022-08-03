import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import "./stylesheets/header-footer.css";
import "./stylesheets/home.css";
import "./stylesheets/courosel.css";
import "./stylesheets/project-courses.css";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
