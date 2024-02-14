import About from "./components/About/About";
import CV from "./components/CV/CV";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <h1 className="celebration">
        Today we Celebrate the way I love that 4'4 girl
      </h1>
      <Home />
      <About />
      <Projects />
      {/* <CV /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
