import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Contact from "./components/contact/Contact";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0}}>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


// https://www.free-css.com/free-css-templates/page263/mind